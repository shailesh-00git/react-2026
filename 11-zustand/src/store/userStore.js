import { create } from "zustand";

export const useUserStore = create((set) => ({
  users: [],
  loading: false,
  errror: null,
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      set({ users: data, loading: false });
    } catch (error) {
      set({ error: error, loading: false });
    }
  },
}));
