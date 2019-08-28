import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function favoruiteReducer(state = initialState.favouriteRecipes, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_FAVOURITE:
            var addedItem = state.find(r => r.id === action.payload.id);
            if (addedItem) {
                var newState = state.map(favouriteRecipe => {
                    if (favouriteRecipe.id === action.payload.id) {
                        return Object.assign({}, addedItem)
                    }
                    return favouriteRecipe;

                })
                return newState;
            } else
                return [...state, {...action.payload}]


        case actionTypes.REMOVE_FROM_FAVOURITE:
            const newState2 = state.filter(favouriteRecipe=> favouriteRecipe.id !== action.payload.id)
            return newState2
        default:
            return state;
    }
}