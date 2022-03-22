import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from '../_actions/types'

export default function (state = {}, action) {
    switch(action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;
        case SIGNUP_USER:
            return { ...state, signup: action.payload}
            break;
        case LOGOUT_USER:
            return { ...state, logoutSuccess: action.payload}
            break;
        default:
            return state;
    }
}