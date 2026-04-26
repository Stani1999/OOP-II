// Lab II.2.1
import { Product } from "../oop/Product";

//<II.2.13.> 
// Product replace with generic T
// add <T = Product> to make it generic with default type Product
export interface IProductRepository<T = Product> { // 
    getById(id: string): Promise<T | null>;
    list(): Promise<T[]>;
    create(product: T): Promise<void>; // </II.2.12.>
    //<II.2.13./>
}