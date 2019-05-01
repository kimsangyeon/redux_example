import * as types from './ActionTypes';

export function plus() {
    return {
        type: types.PLUS
    };
}

export function minus() {
    return {
        type: types.MINUS
    };
}

export function color(color) {
    return {
        type: types.COLOR,
        color: color
    };
}