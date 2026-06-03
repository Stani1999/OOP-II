// Lab XI.2.2.
import { Product } from "../../oop/products/Product";
import { ProductDTO } from "../dto/ProductDTO";

export class ProductMapper {
    static toDTO(product: Product): ProductDTO {
        return {
            id: product.id,
            name: product.name,
            price: {
                amount: product.price.amount,
                currency: product.price.currency,
                formatted: product.price.format()
            }
        };
    }
}   