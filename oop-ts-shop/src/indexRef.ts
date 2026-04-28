// Lab IV.2.1.
// <V.3.4.>
import { Size } from "./domain/Size";                                       // <V.5.6./>
import { Checkout } from "./app/Checkout";
import { Cart } from "./oop/carts/Cart";
// </V.3.4.>
import { CourierShipping } from "./domain/shipping/CourierShipping";        // <V.3.1./>
import { Money } from "./domain/Money";                                     // <V.2.3./>
import { Product } from "./oop/products/Product";
import { DownloadFeature } from "./oop/products/DownloadFeature";
import { ShippingFeature } from "./oop/products/ShippingFeature";
import { SubscriptionFeature } from "./oop/products/SubscriptionFeature";

const product = new Product("1","Game Bundle", new Money(1000, "USD"), [    // <V.2.3./>
    new DownloadFeature("url"),
    new ShippingFeature(new Size(1.2, "KG")), // <V.5.6./> (1,2) -> (new Size(1.2, "KG"))
    new SubscriptionFeature(30)
]);

console.log(product);

// <IV.3.2.>
// Use:
const shipping = product.getFeature(ShippingFeature);

if (shipping) {
    console.log(shipping?.[0]?.size); // <V.5.6.> weight -> size <IV.6.0./> .weight -> ?.[0]?.weight
}
// </IV.3.2.>

// <V.3.1.>
const shippingP = new CourierShipping();

const price = shippingP.calculate(new Size(1.2, "KG"), new Money(5000, "PLN")); // <V.5.6./> 

console.log(price.format());
// </V.3.1.>

// <V.3.4.>
const p1 = new Product("1", "Test", new Money(1000, "PLN"),
[new ShippingFeature(new Size(1.2, "KG"))    // <V.5.6./> 1.2 -> new Size(1.2, "KG")
]); 

const cart = new Cart();
cart.add(p1, 2);

const checkout = new Checkout(new CourierShipping());
const total = checkout.calculate(cart);

console.log(`Total price with shipping: ${total.format()}`);
// </V.3.4.>