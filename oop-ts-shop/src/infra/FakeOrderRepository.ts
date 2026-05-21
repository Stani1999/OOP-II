// Lab VIII.3.2.
import { IOrderRepository } from "../domain/IOrderRepository";

export class FakeOrderRepository implements IOrderRepository {
    async save(order: any): Promise<void> {}
}