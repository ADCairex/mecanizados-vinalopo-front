import { create } from 'zustand'

type OTStore = {
  otId: number | null
  setOtId: (id: number) => void
}

export const useOTStore = create<OTStore>((set) => ({
  otId: null,
  setOtId: (id) => set({ otId: id }),
}))
