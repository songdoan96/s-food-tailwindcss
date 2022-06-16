import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  removeCount: () => set({ count: 0 }),
});

store = devtools(store);
store = persist(store, { name: "count-storage", getStorage: () => sessionStorage });

const countStore = create(store);

export default countStore;
