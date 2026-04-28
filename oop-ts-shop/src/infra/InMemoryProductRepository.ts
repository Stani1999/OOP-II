// Lab II.2.2
import { Money } from "../domain/Money";                //<III.1.2./>
import { IProductRepository } from "../domain/IProductRepository";
import { Product } from "../oop/Product";
// import { Money } from "../domain/Money"; // "In terms of money, we have no money" (class yet)

export class InMemoryProductRepository 
    implements IProductRepository<Product> { // </II.2.13.> add <Product>

    private products: Product[] = [
        // <III.1.2.> Finaly  integrating Money 
        new Product("1", "Laptop", new Money(300000)),  // Only before Lab III: 300000 instead of new Money(300000)
        new Product("2", "Mouse", new Money(5000))      // Only before Lab III: 5000 instead of new Money(5000)
        // </III.1.2.>
    ];

    async getById(id: string): Promise<Product | null> {
        return this.products.find(p => p.id === id) ?? null;
    }

    async list(): Promise<Product[]> {
        return this.products;
    }

    // <II.2.12.>
    async create(product: Product): Promise<void> {
        this.products.push(product);
    }
    // </II.2.12.>
}