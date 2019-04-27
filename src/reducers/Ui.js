import {COLOR} from '../actions/ActionTypes';

const initialState = {
    color: [255, 255, 255]
};

export default function Counter(state = initialState, action) {
    switch(action) {
        case COLOR:
            return {...state, color: action.color};
    }

    return state;
}