export const POPUP = 'POPUP';
export const USER = 'USER';
export const PAGE = 'PAGE'

export const state = {
    popup: '',
    user: {},
    page: 'Home'
}

export const pageChange = pageName => {
    return {
        type: PAGE,
        payload: pageName,
    }
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