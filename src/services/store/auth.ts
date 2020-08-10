import create from 'zustand'

export const [useAuth] = create((set: any) => ({
  user: undefined,
  setUser: (user: any) => set(() => ({ user })),
}))
