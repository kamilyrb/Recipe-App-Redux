import { combineReducers } from 'redux'
import categoryListReducer from './categoryListReducer'
import changeCategoryReducer from './changeCategoryReducer'
import recipeListReducer from './recipeListReducer'
import favouriteReducer from './favouriteReducer'

const rootReducer = combineReducers({
    categoryListReducer,
    changeCategoryReducer,
    recipeListReducer,
    favouriteReducer
})

export default rootReducer;