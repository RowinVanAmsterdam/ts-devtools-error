import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type BearStateNew = {
    bears: number;
    increase: (by: number) => void;
}

export const useBearStore = create<BearStateNew>()(
    devtools(
        (set) => ({
            bears: 0,
            increase: (by) => set((state) => ({ bears: state.bears + by }))
        }),
        {
            name: 'bear-storage'
        }
    )
);