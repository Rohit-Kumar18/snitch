import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (i) => i.shopify_product_id === item.shopify_product_id
      );
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.shopify_product_id === item.shopify_product_id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      } else {
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }
    }),
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.shopify_product_id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),
  clearCart: () => set({ cart: [] }),
  removeItemCompletely: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.shopify_product_id !== itemId),
    })),
}));

export default useCartStore;
