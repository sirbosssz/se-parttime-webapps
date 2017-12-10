import { state, POPUP, USER } from './redux.actions';

const initialState = {
    popup: state.popup,
    user: state.user,
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPUP:
            return state = {
                ...state,
                popup: action.payload,
            }
        case USER:
            return state = {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
}

export default mainReducer;