// Lab XI.3.3.
import { Request, Response } from "express";
import { AddToCart } from "../../app/AddToCart";
import { Checkout } from "../../app/Checkout";
import { Cart } from "../../oop/carts/Cart";
import { CartMapper } from "../mappers/CartMapper";
import { AddToCartRequestDTO } from "../dto/CartDTO";

export class CartController {
  constructor(
    private readonly cart: Cart,
    private readonly addToCart: AddToCart,
    private readonly checkout: Checkout
  ) {}

  // <XI.3.5.>
  getCart(_req: Request, res: Response): void {
    res.json(CartMapper.toDTO(this.cart));
  }

  async addItem(req: Request, res: Response): Promise<void> {
    const body = req.body as AddToCartRequestDTO;

    const result = await this.addToCart.execute(
      body.productId,
      body.quantity
    );

    if (!result.success) {
      if (result.error === "PRODUCT_NOT_FOUND") {
        res.status(404).json({ error: result.error });
        return;
      }

      if (result.error === "INVALID_QUANTITY" || result.error === "EXCEEDS_MAX_QUANTITY") {
        res.status(400).json({ error: result.error });
        return;
      }
    }

    res.status(201).json(CartMapper.toDTO(this.cart));
  }
  // <XI.3.5.>

  // <XI.3.6.>
  async checkoutCart(_req: Request, res: Response): Promise<void> {
    const result = await this.checkout.execute(this.cart);

    if (!result.success) {
      res.status(400).json({ error: result.error });
      return;
    }

    res.json({
      message: "Checkout successful"
    });
  }
  // </XI.3.6.>
}