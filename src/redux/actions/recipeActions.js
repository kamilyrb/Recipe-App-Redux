import * as actionTypes from './actionTypes'
import { SERVER_URL } from '../../constants';

export function getRecipesSuccess(products) {
    return { type: actionTypes.GET_RECIPES_SUCCESS, payload: products }
}

export function getRecipes(categoryId) {
    return function (dispatch) {
        let url =SERVER_URL + '/meals';
        if (categoryId)
            url = url += "?categoryId=" + categoryId;
        return fetch(url).then(response => response.json())
            .then(result => dispatch(getRecipesSuccess(result)))
    }
}