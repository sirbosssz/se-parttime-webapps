import { state, POPUP, USER, PAGE } from './redux.actions';

const initialState = {
    popup: state.popup,
    user: state.user,
    page: state.page,
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
        case PAGE:
            return state = {
                ...state,
                page: action.payload,
            }
        default:
            return state;
    }
}

export default mainReducer;