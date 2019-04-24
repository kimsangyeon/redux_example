import {PLUS, MINUS, COLOR} from './ActionTypes';

export function plus() {
    return {
        type: PLUS
    };
}

export function minus() {
    return {
        type: MINUS
    };
}

export function color(color) {
    return {
        type: COLOR,
        color: color
    };
}