// Lab X.5.3.
import { EventHandler } from "../../domain/events/EventHandler";
import { OrderPaidEvent } from "../../domain/events/OrderPaidEvent";

export class GenerateInvoiceHandler 
    implements EventHandler<OrderPaidEvent> {
    
    async handle(
        event: OrderPaidEvent
    ): Promise<void> {
        
        console.log(
            `Invoice generated for order: ${event.orderId}, total: ${event.total.format()}`
        );
    }
}