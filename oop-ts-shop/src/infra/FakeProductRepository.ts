// Lab II.2.11. 
// Copy of InMemoryProductRepository with empty data 
import { IProductRepository } from "../domain/IProductRepository";
import { Product } from "../oop/Product";

export class FakeProductRepository 
    implements IProductRepository<Product> { // </II.2.13.> add <Product>
    
    private products: Product[] = [];
    
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
    // <II.2.12./>
} 