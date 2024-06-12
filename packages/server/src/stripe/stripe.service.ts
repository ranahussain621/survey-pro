import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stripe } from 'stripe';
import { StripePayment } from 'src/model/stripe-payment.model';
import { v4 as uuidv4 } from 'uuid'; // Import UUID library

const { BACK_CLIENT_URL, SUCCESS_CLIENT_URL, STRIPE_PRIVATE_KEY } = process.env
@Injectable()
export class StripeService {
  private readonly stripe: Stripe;


  constructor(@InjectModel(StripePayment.name) private readonly stripePaymentModel: Model<StripePayment>,) {
    this.stripe = new Stripe(STRIPE_PRIVATE_KEY, {
      apiVersion: '2020-08-27',
    });
  }

  async createCheckoutSession(priceId: string, mode: 'payment' | 'subscription', id: string) {
    try {
      // Check if the user has an existing record with the given mode and status 'paid'
      const paidRecord = await this.stripePaymentModel.findOne({ userId: id, status: 'paid' });

      if (paidRecord) {
        return {
          success: false,
          message: 'You already bought a plan',
        };
      }

      // Check if the user has an existing record with the given mode and status 'unpaid'
      const unpaidRecord = await this.stripePaymentModel.findOne({ userId: id, mode, status: 'unpaid' });

      if (unpaidRecord) {
        const session = await this.stripe.checkout.sessions.retrieve(unpaidRecord.sessionId);
        return session;
      }

      // If no record is found, or the existing record is not 'paid', create a new session
      const session_unique_id = uuidv4();
      const session = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: mode,
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: `${SUCCESS_CLIENT_URL}/${session_unique_id}`,
        cancel_url: `${BACK_CLIENT_URL}`,
      });
      console.log("🚀 ~ StripeService ~ createCheckoutSession ~ session:", session)

      const stripePayment = new this.stripePaymentModel({
        userId: id,
        uniqueId: session_unique_id,
        sessionId: session.id,
        priceId: priceId,
        mode: mode,
        status: 'unpaid',
      });
      await stripePayment.save();

      return session;

    } catch (error) {
      throw new Error(`Error creating session: ${error.message}`);
    }
  }


  //check the status of subscription
  async checkPaymentStatus(uniqueId: string, userId: string) {

    try {
      //condition to check either user buy any plans or not
      if (userId) {
        let status: string = "paid"
        const records = await this.stripePaymentModel.find({ userId, status })
        console.log("🚀 ~ StripeService ~ checkPaymentStatus ~ records:", records)
        if (records.length > 0) {
          return {
            success: true,
            message: "Payment successfully paid"
          }
        }
        return {
          sucess: false,
          message: "payment is pending"
        }
      }


      // check the status from stirpe what is the status of payment for plan, and then store status in db
      const stripePayment = await this.stripePaymentModel.findOne({ uniqueId })
      if (!stripePayment) {
        throw new Error('Payment record not Found')
      }
      const session = await this.stripe.checkout.sessions.retrieve(stripePayment.sessionId);


      stripePayment.status = session.payment_status;

      //check if the type of subscription is string 
      if (typeof session.subscription === 'string') {
        stripePayment.subscriptionId = session.subscription;
      }
      if (typeof session.customer === 'string') {
        stripePayment.stripeCustomerId = session.customer;
      }



      await stripePayment.save();


      return session

    } catch (error) {
      throw new Error(`Error creating session: ${error.message}`);
    }
  }








  async cancelSubscription(userId: string) {
    try {

      // Find active subscription for the user
      const paymentRecord = await this.stripePaymentModel.findOne({ userId, status: 'paid' });
      if (!paymentRecord) {
        throw new Error('No active subscription found for the user.');
      }

      // Fetch all invoices for the customer
      const invoices = await this.stripe.invoices.list({
        customer: paymentRecord.stripeCustomerId, // Use Stripe customer ID
      });
      console.log("🚀 ~ StripeService ~ cancelSubscription ~ invoices:", invoices)

      // Check for unpaid invoices
      const unpaidInvoices = invoices.data.filter(invoice => invoice.status === 'open' || invoice.status === 'uncollectible');
      if (unpaidInvoices.length > 0) {
        return {
          success: false,
          message: 'There are unpaid invoices. Please settle them before cancelling the subscription.',
        };
      }

      // Cancel the subscription
      const subscription = await this.stripe.subscriptions.del(paymentRecord.subscriptionId);

      // Update the payment record status to 'canceled'
      paymentRecord.status = 'canceled';
      await paymentRecord.save();

      return {
        success: true,
        subscription: subscription,
      };
    } catch (error) {
      throw new Error(`Failed to cancel subscription: ${error.message}`);
    }
  }

}
