import {COLOR} from '../actions/ActionTypes';

const initialState = {
    color: [255, 255, 255]
};

export default function ui(state = initialState, action) {
    switch(action.type) {
        case COLOR:
            return {...state, color: action.color};
        default:
            return state;
    }
}