
const reducer = (state, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, loading: true }
        case 'END_LOADING':
            return { ...state, loading: false }
        case 'UPDATE_BOOKS':
            return { ...state, bookData: { ...state.bookData, ...action.payload } }
        case 'UPDATE_MAGAZINES':
            return { ...state, magazine: { ...state.magazine, ...action.payload } }
        case 'UPDATE_ALERT':
            // console.log(action.payload)
            return { ...state, alert: action.payload }
        case 'UPDATE_ALL':
            // console.log(action.payload)
            return { ...state, allBooksAndMagazines: action.payload }
        case 'UPDATE_ISBN':
            // console.log(action.payload)
            return { ...state, findByIsbn: action.payload }
        case 'UPDATE_ALL_SORTED':
            // console.log(action.payload)
            return { ...state, findAllData: action.payload }
        case 'UPDATE_ALL_SORTED1':
            // console.log(action.payload)
            return { ...state, findAllData: action.payload }


        case 'RESET_DES':
            return { ...state, desc: { heading: '', title: '', price: 0, discount: 0, offers: [], description: [], mainImg: [], Images: [], rating: 3.5 } }


        default:
            throw new Error('No matched action!')
    }
}

export default reducer;