import { createContext } from 'react'

export const AppContext = createContext({
    loading: false,
    items: [],
    error: null
});


