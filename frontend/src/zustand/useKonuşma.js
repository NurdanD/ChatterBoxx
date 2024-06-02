import {create} from 'zustand'

const useKonuşma = create((set) => ({

    selectedKonuşma : null,
    setSelectedKonuşma : (selectedKonuşma) => set({selectedKonuşma}),
    mesajlar: [],
    setMesajlar: (mesajlar) => set({mesajlar}),

}))

export default useKonuşma;