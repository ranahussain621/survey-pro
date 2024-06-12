// stripe/stripe.module.ts

import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { StripePayment, StripePaymentSchema } from 'src/model/stripe-payment.model';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [
        MongooseModule.forFeature([{ name: StripePayment.name, schema: StripePaymentSchema }]),
    ],
    controllers: [StripeController],
    providers: [StripeService],
})
export class StripeModule { }
