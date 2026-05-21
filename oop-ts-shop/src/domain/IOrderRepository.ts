// Lab VIII.1.3.
export interface IOrderRepository {
    save(order: any): Promise<void>;
}