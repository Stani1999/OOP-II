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