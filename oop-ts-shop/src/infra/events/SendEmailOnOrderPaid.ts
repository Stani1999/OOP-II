// Lab.X.2.1. 
import { EventHandler } from "../../domain/events/EventHandler";
import { OrderPaidEvent } from "../../domain/events/OrderPaidEvent";

export class SendEmailOnOrderPaid 
    implements EventHandler<OrderPaidEvent> {
    
    async handle(event: OrderPaidEvent): Promise<void> {

        console.log(
            `Email sent for order ${event.orderId}`
        );
    }
}