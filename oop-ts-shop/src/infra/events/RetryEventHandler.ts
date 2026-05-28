// Lab X.5.4.
import { EventHandler } from "../../domain/events/EventHandler";
import { DomainEvent } from "../../domain/events/DomainEvent";

export class RetryEventHandler<T extends DomainEvent>
    implements EventHandler<T> {

    constructor(
        private readonly handler: EventHandler<T>,
        private readonly maxRetries: number = 3
    ) {}

    async handle(event: T): Promise<void> {
        let attempts = 0;
        
        while (attempts < this.maxRetries) {
            try {
                await this.handler.handle(event);
                return;
            } catch (error) {
                attempts++;
                console.log(
                    `Handler failed, retrying... (${attempts}/${this.maxRetries})`
                );
                
                if (attempts >= this.maxRetries) {
                    throw error;
                }
            }
        }
    }
}