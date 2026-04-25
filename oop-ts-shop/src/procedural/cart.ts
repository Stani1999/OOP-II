// I.2.1. Implementation
type Product = {
    id: string;
    name: string;
    price: number;
};

type CartItem = {
    product: Product;
    quantity: number;
};

let cart: CartItem[] = [];

export function addToCart(product: Product, quantity: number): void {
    const existing = cart.find(item => item.product.id === product.id);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({product, quantity});
    }
}

export function totalItems(): number {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

export function clearCart(): void {
    cart = [];
}