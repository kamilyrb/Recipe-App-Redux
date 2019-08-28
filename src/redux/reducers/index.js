import { combineReducers } from 'redux'
import categoryListReducer from './categoryListReducer'
import changeCategoryReducer from './changeCategoryReducer'
import recipeListReducer from './recipeListReducer'

const rootReducer = combineReducers({
    categoryListReducer,
    changeCategoryReducer,
    recipeListReducer
})

export default rootReducer;