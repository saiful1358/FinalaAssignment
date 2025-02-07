import { create } from "zustand";

const useAuthStore = create((set) => ({
    isAuthenticated: false, // Default: Not logged in
    setAuthenticated: (status) => set({ isAuthenticated: status }),
}));

export default useAuthStore;
