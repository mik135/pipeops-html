import { create } from 'zustand'

export const useAuthStore = create((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    isLoggedIn: false,
    setIsLoggedIn: () => set({ isLoggedIn: !!user })
}))
