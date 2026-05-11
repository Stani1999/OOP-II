// Lab VII.1.1.
import { Cart } from "../oop/carts/Cart";
import { IProductRepository } from "../domain/IProductRepository";
import { Result, ok, fail } from "../shared/Result";

type AddToCartError = 
    | "EXCEEDS_MAX_QUANTITY" // <VII.3.4.>
    | "PRODUCT_NOT_FOUND"
    | "INVALID_QUANTITY";

export class AddToCart {
    constructor(
        private readonly repo: IProductRepository,
        private readonly cart: Cart
    ) {}

    async execute(
        productId: string,
        quantity: number
    ): Promise<Result<void, AddToCartError>> {
        if (quantity <= 0) {
            return fail("INVALID_QUANTITY");
        }

        const product = await this.repo.getById(productId);

        if (!product) {
            return fail("PRODUCT_NOT_FOUND");
        }

        this.cart.add(product, quantity);

        // <VII.3.4.>
        const MAX_QUANTITY = 10;

        if (quantity > MAX_QUANTITY) {
            return fail("EXCEEDS_MAX_QUANTITY"); 
        }
        // </VII.3.4.>

        return ok(undefined);
    }
}