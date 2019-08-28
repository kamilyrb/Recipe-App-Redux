
import initialState from './initialState'
import * as actionTypes from '../actions/actionTypes'
export default function recipeListReducer(state=initialState.categories,action){
    switch (action.type) {
        case actionTypes.GET_RECIPES_SUCCESS:
            return action.payload
        default:
            return state
    }
}