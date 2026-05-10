// Lab II.2.1
//import { Product } from "../oop/Product";
// <VI.2.2.>
import { Product } from "../oop/products/Product";
import { IRepository } from "./IRepository";

//<II.2.13.> Product replace with generic T
// └── add <T = Product> to make it generic with default type Product
export interface IProductRepository extends IRepository<Product> {
    create(product: Product): Promise<void>;
//     //<T = Product> { 
//     getById(id: string): Promise<T | null>;
//     list(): Promise<T[]>;
//     create(product: T): Promise<void>; // </II.2.12.>
//     //<II.2.13./>
// }
}
// <VI.2.2.>