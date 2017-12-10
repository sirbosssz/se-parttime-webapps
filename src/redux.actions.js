export const POPUP = 'POPUP';
export const USER = 'USER';

export const state = {
    popup: '',
    user: {},
}

export const popupChange = text => {
    return {
        type: POPUP,
        payload: text,
    }
}

export const userInsert = username => {
    return{
        type: USER,
        payload: username,
    }
}