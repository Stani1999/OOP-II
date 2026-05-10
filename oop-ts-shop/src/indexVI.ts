// Lab VI.1.3.
import { fail, flatMap, map, match, ok, Result, unwrap } from "./shared/Result"; // <VI.4.5./>
import { Checkout } from "./app/Checkout";
import { Cart } from "./oop/carts/Cart";
import { CourierShipping } from "./domain/shipping/CourierShipping";

const cart = new Cart();
const checkout = new Checkout(new CourierShipping());
const result = checkout.calculate(cart);

if (result.success) {
    console.log(`Total price with shipping: ${result.data.format()}`);
} else {
    console.error(`Checkout failed: ${result.error}`);
}

// <VI.4.5.>
type CheckoutError = "EMPTY_CART" | "PAYMENT_FAILED";

function parseQty(input: string): Result<number, "INVALID_QTY"> {
    const n = Number(input);
    return Number.isInteger(n) && n > 0 ? ok(n) : fail("INVALID_QTY");
}

function calculatePrice(qty: number): Result<number, CheckoutError> {
    if (qty === 0) return fail("EMPTY_CART");
    return ok(qty * 100);
}

const result2 = flatMap(parseQty("3"), calculatePrice);

// map
const formatted = map(result, (price) => `${price} PLN`);

// match
const message = match(formatted, {
    ok: (text) => `Total price with shipping: ${text}`,
    fail: (err) => `Error: ${err}`,
});

console.log(message);

// unwrap: (example tests / places where "it must succeed")
const value = unwrap(result); // number or throw 
console.log(value);
// </VI.4.5.>