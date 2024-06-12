import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class StripePayment extends Document {
    @Prop({ required: false })
    userId: string;
    @Prop({ required: false })
    uniqueId: string;
    @Prop({ required: false })
    sessionId: string;
    @Prop({ type: String, required: false })
    subscriptionId: string;
    @Prop({ type: String, required: false })
    stripeCustomerId: string;

    @Prop({ required: false })
    priceId: string;
    @Prop({ required: false })
    url: string;
    @Prop({ required: false })
    mode: string;
    @Prop({ required: false })
    status: string;
    @Prop({ required: false })
    singlePayment: string;

    @Prop({ default: Date.now })
    createdAt: Date;


}

export const StripePaymentSchema = SchemaFactory.createForClass(StripePayment);
