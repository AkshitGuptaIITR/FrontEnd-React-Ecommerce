import { userConstants } from "../actions/constants"

const initState = {
    error: '',
    message: '',
    loading: false
}
console.log(initState)
export default (state = initState, action) => {

    switch(action.type){
        case userConstants.USER_REGISTER_REQUEST:
            state ={
                ...state,
                loading: true
            }
            break;
        case userConstants.USER_RESGISTER_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case userConstants.USER_REGISTER_FALIURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;

    }

    return state;
}