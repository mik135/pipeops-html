import { createStore } from 'zustand'

export const useAuthStore = createStore((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    isLoggedIn: false,
    setIsLoggedIn: () => set({ isLoggedIn: !!user })
}))