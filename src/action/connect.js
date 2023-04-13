import fetchData from "./utils/fetchData";

const url = process.env.REACT_APP_BASE_URL + '/data'
console.log(url)

export const AllData = async (dispatch) => {
    dispatch({ type: 'START_LOADING' })
    const result = await fetchData({ url: url + '/allData', method: 'GET' }, dispatch);
    if (result) {
        dispatch({ type: 'UPDATE_ALL', payload: result })
    }
    dispatch({ type: 'END_LOADING' })
}

export const FindAllInSorted = async (dispatch) => {
    dispatch({ type: 'START_LOADING' })
    const result = await fetchData({ url: url + '/allDataInSorted', method: 'GET' }, dispatch);
    if (result) {
        dispatch({ type: 'UPDATE_ALL_SORTED', payload: result })
    }
    dispatch({ type: 'END_LOADING' })
}


export const findByEmail = async (email, dispatch) => {
    dispatch({ type: 'START_LOADING' })
    const result = await fetchData({ url: url + '/findByEmail', method: 'PATCH', body: { email } }, dispatch);

    dispatch({ type: 'UPDATE_ALL', payload: result });
    dispatch({ type: 'END_LOADING' })

};
export const findByisbn = async (isbn, dispatch) => {
    dispatch({ type: 'START_LOADING' })
    const result = await fetchData({ url: url + '/findByIsbn', method: 'PATCH', body: { isbn } }, dispatch);

    dispatch({ type: 'UPDATE_ISBN', payload: result });
    dispatch({ type: 'END_LOADING' })
};

export const AddBookAndMagazine = async (bookData, magazine, dispatch) => {
    dispatch({ type: 'START_LOADING' })
    const result = await fetchData({ url: url + '/addData', method: 'PATCH', body: { bookData, magazine } }, dispatch);
    if (result) {
        dispatch({ type: 'UPDATE_ALL_SORTED1', payload: result.allItems })
        dispatch({
            type: 'UPDATE_ALERT',
            payload: { open: true, severity: 'success', message: result.message },
        });
    }
    dispatch({ type: 'END_LOADING' })

};

