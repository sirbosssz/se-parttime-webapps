import { state, POPUP } from './redux.actions';

const initialState = {
    popup: state.popup,
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPUP:
            return state = {
                ...state,
                popup: action.payload,
            }
        default:
            return state;
    }
}

export default mainReducer;