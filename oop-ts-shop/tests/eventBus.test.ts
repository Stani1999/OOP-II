// Lab X.4.2.
import { describe, it, expect } from "vitest";
import { EventBus } from "../src/shared/EventBus";
import { FakeHandler } from "../src/domain/events/FakeHandler";
import { OrderPaidEvent } from "../src/domain/events/OrderPaidEvent";
import { Money } from "../src/domain/Money";

describe("EventBus", () => {
    it("calls subscribed handlers", async () => {
        const bus = new EventBus();
        const handler = new FakeHandler();
        
        bus.subscribe(
            "OrderPaid", 
            handler
        );
        
        await bus.publish(
            new OrderPaidEvent(
                "1", 
                new Money(1000, "PLN")
            )
        );

        expect(handler.called)
        .toBe(true);
    });
});