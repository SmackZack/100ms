import axios from 'axios'
import { CHARACTER_DETAILS_FAIL, CHARACTER_DETAILS_REQUEST, CHARACTER_DETAILS_SUCCESS, CHARACTER_LIST_FAIL, CHARACTER_LIST_REQUEST, CHARACTER_LIST_SUCCESS } from '../constants/characters'

export const listCharacters = (keyword='',pageNumber='') => async (dispatch) => {
    try {
        dispatch({ type: CHARACTER_LIST_REQUEST })

        const { data } = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${keyword}&limit=10&offset=${pageNumber}0`)

        dispatch({
            type: CHARACTER_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        console.log(typeof (error.response.data.message));
        dispatch({
            type: CHARACTER_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listCharacterDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: CHARACTER_DETAILS_REQUEST })

        const { data } = await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)

        dispatch({
            type: CHARACTER_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CHARACTER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}