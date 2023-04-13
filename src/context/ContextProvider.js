import { useContext, useReducer } from "react";
import { createContext } from "react"

import reducer from "./reducer";

const initialState = {
    alert: { open: false, severity: 'info', message: ' ' },
    loading: false,
    bookData: {
        id: '',
        title: '',
        author_id: '',
        isbn: '',
        genre: ''
    },
    magazine: {
        id: '',
        title: '',
        author_id: '',
        issn: '',
        publisher: ''
    },
    allBooksAndMagazines: '',
    findByIsbn: '',
    findAllData: 'null',
    findAllData1: 'null'

}

const Context = createContext(initialState)

export const useValue = () => {
    return useContext(Context)
}
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
    )
}

export default ContextProvider