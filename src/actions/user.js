import axios from "../helpers/axios";
import { authConstant, userConstants } from "./constants"

export const signup = (user) => {

    return async (dispatch) => {
        dispatch({ type: authConstant.LOGIN_REQUEST })
        const res = await axios.post("/admin/signin", {
            ...user
        });

        if (res.status === 201) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: userConstants.USER_RESGISTER_SUCCESS,
                payload: {
                    message:res.data.message
                }
            });
        }
        else {
            if (res.status === 400) {
                dispatch({
                    type: userConstants.USER_REGISTER_FALIURE,
                    payload: { error:res.data.error }
                })
            }
        }
    }
}
