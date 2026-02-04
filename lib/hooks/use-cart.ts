import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CartStore {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  total: 0,

  addItem: (item: CartItem) => {
    set((state) => {
      const existingItem = state.items.find(i => i.id === item.id);
      let newItems;

      if (existingItem) {
        newItems = state.items.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        newItems = [...state.items, item];
      }

      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return { items: newItems, total };
    });
  },

  removeItem: (id: string) => {
    set((state) => {
      const newItems = state.items.filter(i => i.id !== id);
      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return { items: newItems, total };
    });
  },

  updateQuantity: (id: string, quantity: number) => {
    set((state) => {
      if (quantity <= 0) {
        const newItems = state.items.filter(i => i.id !== id);
        const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return { items: newItems, total };
      }

      const newItems = state.items.map(i =>
        i.id === id ? { ...i, quantity } : i
      );
      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return { items: newItems, total };
    });
  },

  clearCart: () => {
    set({ items: [], total: 0 });
  },

  getTotal: () => {
    return get().total;
  }
}));
