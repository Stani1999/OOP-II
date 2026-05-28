// Lab. X.2.2.
import { EventHandler } from "../../domain/events/EventHandler";
import { OrderPaidEvent } from "../../domain/events/OrderPaidEvent";

export class TrackAnalyticsOnOrderPaid 
    implements EventHandler<OrderPaidEvent> {

    async handle(event: OrderPaidEvent): Promise<void> {
        console.log(
            `Analytics tracked: ${event.total.format()}`
        );
    }
}
