// Lab. X.4.1.
import { EventHandler } from "./EventHandler";
import { OrderPaidEvent } from "./OrderPaidEvent";

export class FakeHandler 
    implements EventHandler<OrderPaidEvent> {

    called = false;

    async handle(): Promise<void> {
        this.called = true;
    }
}