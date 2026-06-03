// Lab. XI.3.1.
export type AddToCartRequestDTO = {
  productId: string;
  quantity: number;
};

export type CartDTO = {
  totalItems: number;
  totalPrice: string;
};