import { categoryConstants } from "../actions/constants"

const initState = {
    categories: [],
    loading: false,
    error: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            // console.log(action.payload.categories)
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading:false
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...state,
                loading:false 
            }
            break;
    }
    return state;
}