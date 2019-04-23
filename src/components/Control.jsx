import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onPlus: PropTypes.func,
    onMinus: PropTypes.func,
    onColor: PropTypes.func
};

function consoleWarning(name) {
    return () => console.warn(`${name} is not defined.`);
}

const defaultProps = {
    onPlus: consoleWarning('onPlus'),
    onMinus: consoleWarning('onMinus'),
    onColor: consoleWarning('onColor')
};

class Control extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onMinus}>-</button>
                <button onClick={this.props.onColor}>color</button>
            </div>
        );
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;