
const initState = {
    authErr: null,

}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authErr: 'Login Failed',

            }
        case 'LOGIN_SUCCESS': 
        console.log('login success')
        return { 
            ...state,
            authErr: null,
        }
        case 'SIGNOUT_SUCCESS':
        console.log('signout')
            return state
        default: 
         return state;
    }
}

export default authReducer;