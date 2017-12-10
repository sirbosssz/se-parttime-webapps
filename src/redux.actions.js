export const POPUP = 'POPUP';

export const state = {
    popup: '',
}

export const popupChange = text => {
    return {
        type: POPUP,
        payload: text,
    }
}