import { IPaymentService } from "./IPaymentService";
import { ApplePayPayment } from "./ApplePayPayment";
import { BlikPayment } from "./BlikPayment";
import { CryptoPayment } from "./CryptoPayment";
import { GooglePayPayment } from "./GooglePayPayment";
import { PayPalPayment } from "./PayPalPayment";
import { StripePayment } from "./StripePayment";

export class PaymentFactory {
    static create(type: string): IPaymentService {
        switch (type.toLowerCase()) {
            case "applepay":
                return new ApplePayPayment();
            case "blik":
                return new BlikPayment();
            case "crypto":
                return new CryptoPayment();
            case "googlepay":
                return new GooglePayPayment();
            case "stripe":
                return new StripePayment();
            case "paypal":
                return new PayPalPayment();
            default:
                throw new Error(`Unknown payment type: ${type}`);
        }
    }
}