import * as actionTypes from './actionTypes'

export function addToFavourite(favouriteItem){
    return {type:actionTypes.ADD_TO_FAVOURITE,payload:favouriteItem}
}

export function removeFromFavourite(recipe){
    return {type:actionTypes.REMOVE_FROM_FAVOURITE,payload:recipe}
}