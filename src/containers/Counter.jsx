import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Value from '../components/Value';
import Control from '../components/Control';

const propTypes = {
    number: PropTypes.number
};

const defaultProps = {
    number: -1
};

class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Value />
                <Control />
            </div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;