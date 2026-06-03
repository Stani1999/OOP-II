// Lab. XI.3.2.
import { Cart } from "../../oop/carts/Cart";
import { CartDTO } from "../dto/CartDTO";

export class CartMapper {
  static toDTO(cart: Cart): CartDTO {
    return {
      totalItems: cart.totalItems(),
      totalPrice: cart.totalPrice().format()
    };
  }
}