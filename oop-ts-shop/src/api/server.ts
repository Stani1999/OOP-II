// XI.1.3.
// <XI.3.6.>
import { Cart } from "../oop/carts/Cart";
import { AddToCart } from "../app/AddToCart";
import { Checkout } from "../app/Checkout";
import { CartController } from "./controllers/CartController";
import { FakeOrderRepository } from "../infra/FakeOrderRepository";
import { FakePaymentSuccess } from "../domain/payment/FakePayment";
import { EventBus } from "../shared/EventBus";
import { CartValidator } from "../domain/services/CartValidator";
import { DiscountService } from "../domain/services/DiscountService";
import { LoggingService } from "../domain/services/LoggingService";
import { createCartRoutes } from "./routers/CartRouter";
// </XI.3.6.>
// <XI.2.5.>
import { InMemoryProductRepository } from "../infra/InMemoryProductRepository";
import { ListProducts } from "../app/ListProducts";
import { ProductController } from "./controllers/ProductController";
import { createProductRoutes } from "./routers/ProductRouter";
// </XI.2.5.>
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});

// <XI.2.5.>
const productRepository = new InMemoryProductRepository();  
const listProducts = new ListProducts(productRepository);
const productController = new ProductController(listProducts);

app.use("/api/products", createProductRoutes(productController));
// </XI.2.5.>

// <XI.3.6.>
const orderRepository = new FakeOrderRepository();
const paymentService = new FakePaymentSuccess();
const eventBus = new EventBus();
const cartValidator = new CartValidator();
const discountService = new DiscountService(10);
const logger = new LoggingService();

const cart = new Cart();
const addToCart = new AddToCart(productRepository, cart);
const checkout = new Checkout(
    paymentService,
    orderRepository,
    eventBus,
    cartValidator,
    discountService,
    logger
);

const cartController = new CartController(cart, addToCart, checkout);

app.use("/api/cart", createCartRoutes(cartController));
// </XI.3.6.>

const port = 3000;

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});