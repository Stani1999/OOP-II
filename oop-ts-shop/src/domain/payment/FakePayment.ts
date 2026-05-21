// Lab IX.3.1.
import { ok, fail, Result } from "../../shared/Result";
import { IPaymentService, PaymentError } from "./IPaymentService";
import { Money } from "../Money";

export class FakePaymentSuccess implements IPaymentService {
    async pay(amount: Money): Promise<Result<void, PaymentError>> {
        return ok(undefined);
    }

    // <IX.4.3.>
    async refund(amount: Money): Promise<Result<void, PaymentError>> {
        return fail("REFUND_FAILED");
    }
    // </IX.4.3.>

    // <IX.4.4.>
    supportsCurrency(currency: string): boolean {   
        return true; // <IX.4.4.> Supports all currencies for testing
    }
    // </IX.4.4.>

    name(): string {
        return "Fake Success";
    }
}

export class FakePaymentFailure implements IPaymentService {
    async pay(amount: Money): Promise<Result<void, PaymentError>> {
        return fail("PAYMENT_FAILED");
    }

    // <IX.4.3.>
    async refund(amount: Money): Promise<Result<void, PaymentError>> {
        return fail("REFUND_FAILED");
    }
    // </IX.4.3.>

    // <IX.4.4.>
    supportsCurrency(currency: string): boolean {   
        return true; // <IX.4.4.> Supports all currencies for testing
    }
    // </IX.4.4.>

    name(): string {
        return "Fake Failure";
    }
}