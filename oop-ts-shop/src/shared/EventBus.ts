// Lab X.2.3.
import { DomainEvent } from "../domain/events/DomainEvent";
import { EventHandler } from "../domain/events/EventHandler";

export class EventBus {
    private handlers: Record<string, EventHandler<any>[]> = {};

    subscribe<T extends DomainEvent>(
        eventName: string,
        handler: EventHandler<T>
    ): void {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(handler);
    }

    // <X.5.6.> Add unsubscribe method
    unsubscribe<T extends DomainEvent>(
        eventName: string,
        handler: EventHandler<T>
    ): void {
        if (!this.handlers[eventName]) {
            return;
        }
        this.handlers[eventName] = this.handlers[eventName].filter(
            h => h !== handler
        );
    }
    // </X.5.6.>

    async publish(event: DomainEvent): Promise<void> {
        const handlers = 
        this.handlers[event.name] || [];
        
        for (const handler of handlers) {
            await handler.handle(event);
        }
    }
}