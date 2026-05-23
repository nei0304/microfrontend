import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type User = {
  id: number;
  name: string;
} | null;

type UserStore = {
  user: User;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: "user-storage", // chave no localStorage
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user, token: state.token }), // só salva isso
    },
  ),
);
