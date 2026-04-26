// Lab IV.2.1.
import { Product } from "./oop/products/Product";
import { DownloadFeature } from "./oop/products/DownloadFeature";
import { ShippingFeature } from "./oop/products/ShippingFeature";
import { SubscriptionFeature } from "./oop/products/SubscriptionFeature";

const product = new Product("1","Game Bundle", [
    new DownloadFeature("url"),
    new ShippingFeature(1.2),
    new SubscriptionFeature(30)
]);

console.log(product);

// <IV.3.2.>
// Use:
const shipping = product.getFeature(ShippingFeature);

if (shipping) {
    console.log(shipping?.[0]?.weight); // <IV.6.0./> .weight -> ?.[0]?.weight
}
// </IV.3.2.>