// Lab.X.1.3.
import { DomainEvent } from "./DomainEvent";

export interface EventHandler<T extends DomainEvent> {
    handle(event: T): Promise<void>;
}