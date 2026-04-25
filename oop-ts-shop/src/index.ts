/* Lab I.2.2.
import { addToCart, totalItems, clearCart } from "./procedural/cart"

const product = { id: "1", name: "Laptop", price: 3000 };
addToCart(product, 2);
addToCart(product, 1);

console.log("Total items:", totalItems());
clearCart();
*/

//Lab I.3.4.
import { Product } from "./oop/Product";
import { Cart } from "./oop/Cart";

const cart = new Cart();
const laptop = new Product("1","Laptop", 3000);


cart.add(laptop, 2);
cart.add(laptop, 1);

console.log("Total items:", cart.totalItems());

// <Lab I.5.1.>
console.log("Total price:", cart.totalPrice());
// </Lab I.5.1.>

// <Lab I.5.2.>
try {
    cart.add(laptop, 0);
} catch (e) {
    // Type assertion used to access the message property of the Error objecty
    console.error("Error adding product:", (e as Error).message)
}
// </Lab I.5.2.>

// <Lab I.5.3.>
cart.remove("1");
console.log("Total items after removal:", cart.totalItems());
// </Lab I.5.3.>

// <Lab I.5.4.>
const cart2 = new Cart();
const phone = new Product("2","Nokia 3310", 100);
cart2.add(phone, 1);
console.log("Cart 2 total items:", cart2.totalItems());
// </Lab I.5.4.>
