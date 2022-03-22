import axios from 'axios'
import { LOGIN_USER } from './types'
import { SIGNUP_USER } from './types'
import { LOGOUT_USER } from './types'
import { AUTH } from './types'

export function loginUser(dataToSubmit) {
    const request = axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data )

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function signupUser(dataToSubmit) {
    const request = axios.post('/api/users/signup', dataToSubmit)
    .then(response => response.data )

    return {
        type: SIGNUP_USER,
        payload: request
    }
}

export function logoutUser() {
    const request = axios.get('/api/users/logout')
    .then(response => response.data )

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export function auth() {
    const request = axios.get('/api/users/auth')
    .then(response => response.data )

    return {
        type: AUTH,
        payload: request
    }
}