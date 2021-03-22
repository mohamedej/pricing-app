import create from 'zustand'

type ToggleStore = {
    toggler: boolean;
    switchToggler: () => void;
}


 export const useStore = create<ToggleStore>(set => ({
    toggler: false,
    switchToggler: (): void => set(state => ({toggler: !state.toggler}))
}))

