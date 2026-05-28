import { DomainEvent } from "../domain/events/DomainEvent";
import { EventHandler } from "../domain/events/EventHandler";
import { RetryEventHandler } from "../infra/events/RetryEventHandler";

export class AsyncEventBus {
    private handlers: Record<string, EventHandler<any>[]> = {};
    private queue: DomainEvent[] = [];
    private isProcessing = false;

    subscribe<T extends DomainEvent>(
        eventName: string,
        handler: EventHandler<T>
    ): void {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(handler);
    }

    async publish(event: DomainEvent): Promise<void> {
        this.queue.push(event);
        
        if (!this.isProcessing) {
            this.processQueue();
        }
    }

    private async processQueue(): Promise<void> {
        this.isProcessing = true;
        
        while (this.queue.length > 0) {
            const event = this.queue.shift();
            
            if (event) {
                const handlers = this.handlers[event.name] || [];
                const promises = handlers.map(handler => 
                    new RetryEventHandler(handler).handle(event)
                );
                
                await Promise.allSettled(promises);
            }
        }
        
        this.isProcessing = false;
    }

    // <X.5.6.> 
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
}