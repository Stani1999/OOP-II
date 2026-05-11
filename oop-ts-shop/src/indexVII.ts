// Lab VII.1.2.
// <VII.3.3.>
import { ClearCart } from "./app/ClearCart"; 
import { RemoveFromCart } from "./app/RemoveFromCart";
// </VII.3.3.>
import { InMemoryProductRepository } from "./infra/InMemoryProductRepository";
import { Cart } from "./oop/carts/Cart";
import { AddToCart } from "./app/AddToCart";
import { Checkout } from "./app/Checkout";
import { CourierShipping } from "./domain/shipping/CourierShipping";

async function main() {
    const repo = new InMemoryProductRepository();
    const cart = new Cart();

    const addToCart = new AddToCart(repo, cart);
    // <VII.3.3.> 
    const addResult = await addToCart.execute("1", 2); // <VII.3.3./> Add prefix const addResult =

    if (addResult.success) {
        console.log("Log: Product added to cart.");
    } else {
        console.log("Log Error:", addResult.error);
    }

    // <VII.3.3.> Logs for RemoveFromCart
    const removeFromCart = new RemoveFromCart(cart);
    const removeResult = removeFromCart.execute("1");

    if (removeResult.success) {
        console.log("Log: Product removed from cart.");
    } else {
        console.log("Log Error:", removeResult.error);
    }

    // <VII.3.3.> Logs for ClearCart
    const clearCart = new ClearCart(cart);
    clearCart.execute();
    console.log("Log: Cart has been cleared.");

    // <VII.3.3.> Re-adding product so checkout has data after clear
    await addToCart.execute("1", 1);
    // </VII.3.3.>

    const checkout = new Checkout(cart, new CourierShipping());
    const result = checkout.execute();

    if (result.success) {
        console.log("Total:", result.data.format());
    } else {
        console.log("Error:", result.error);
    }
}

main();