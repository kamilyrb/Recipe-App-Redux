import * as actionTypes from './actionTypes'
import { SERVER_URL } from '../../constants'


export function changeCategory(category) {
    return { type: actionTypes.CHANGE_CATEGORY, payload: category }
}

function getCategoriesSuccess(categories) {
    return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories }
}


export function getCategories() {
    return function (dispatch) {
        let url = SERVER_URL + "/categories";
        return fetch(url).then(response => response.json()).then(result => dispatch(getCategoriesSuccess(result)))
    }
}