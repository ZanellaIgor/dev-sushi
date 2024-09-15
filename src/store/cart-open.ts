import { create } from 'zustand';

type States = {
  isCartOpen: boolean;
};

type Actions = {
  toggleCartOpen: (open: boolean) => void;
};

export const useCartOpen = create<States & Actions>()((set) => ({
  isCartOpen: false,
  toggleCartOpen: (open) => set({ isCartOpen: open }),
}));
