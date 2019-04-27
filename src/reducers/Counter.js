import {PLUS, MINUS} from '../actions/ActionTypes';

const initialState = {
    number: 0
};

export default function Counter(state = initialState, action) {
    switch(action) {
        case PLUS:
            return {...state, number: state.number + 1};
        case MINUS:
            return {...state, number: state.number - 1}
    }

    return state;
}