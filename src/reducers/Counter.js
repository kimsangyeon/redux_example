import {PLUS, MINUS} from '../actions/ActionTypes';

const initialState = {
    number: 0
};

export default function counter(state = initialState, action) {
    switch(action.type) {
        case PLUS:
            return {...state, number: state.number + 1};
        case MINUS:
            return {...state, number: state.number - 1};
        default:
            return state;
    }
}