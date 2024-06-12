// stripe/stripe.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
    constructor(private readonly stripeService: StripeService) { }

    @Post('create-checkout-session')
    async createCheckoutSession(
        @Body() body: any
    ) {
        const { priceId, mode, id } = body
        const session = await this.stripeService.createCheckoutSession(priceId, mode, id);
        return { session: session };
    }
    @Post('check-payment-status')
    async checkPaymentStatus(@Body() body: any) {
        const { uniqueId, userId } = body

        const session = await this.stripeService.checkPaymentStatus(uniqueId, userId)
        return { session: session };
    }

    @Post('cancel-subscription')
    async cancelSubscription(@Body() body: { userId: string }) {
        const { userId } = body;
        const result = await this.stripeService.cancelSubscription(userId);
        return result;
    }

    // Add more controller methods as needed
}
