"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  slug: string;
  name: string;
  price: number;
  ml: number;
  quantity: number;
  bottleColor: [string, string];
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number, ml: number) => void;
  updateQty: (id: number, ml: number, qty: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  totalItems: () => number;
  subtotal: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) => {
        set((s) => {
          const existing = s.items.find(
            (i) => i.id === item.id && i.ml === item.ml
          );
          if (existing) {
            return {
              items: s.items.map((i) =>
                i.id === item.id && i.ml === item.ml
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
              isOpen: true,
            };
          }
          return { items: [...s.items, { ...item, quantity: 1 }], isOpen: true };
        });
      },

      removeItem: (id, ml) =>
        set((s) => ({
          items: s.items.filter((i) => !(i.id === id && i.ml === ml)),
        })),

      updateQty: (id, ml, qty) => {
        if (qty <= 0) { get().removeItem(id, ml); return; }
        set((s) => ({
          items: s.items.map((i) =>
            i.id === id && i.ml === ml ? { ...i, quantity: qty } : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),
      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      subtotal: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    { name: "zaarib-cart", partialize: (s) => ({ items: s.items }) }
  )
);
