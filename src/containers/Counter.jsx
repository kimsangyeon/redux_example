import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Value from '../components/Value';
import Control from '../components/Control';
import {connect} from 'react-redux';
// import {connect, bindActionCreators} from 'react-redux';
import * as actions from '../actions';

const propTypes = {
    number: PropTypes.number
};

const defaultProps = {
    number: -1
};

class Counter extends Component {
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor() {
        const color = [
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200)
        ];

        this.props.handleColor(color);
    }

    render() {
        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        };


        return (
            <div style={style}>
                <Value number={this.props.number}/>
                <Control 
                    onPlus={this.props.handlePlus}
                    onMinus={this.props.handleMinus}
                    onColor={this.setRandomColor}/>
            </div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => {dispatch(actions.plus())},
        handleMinus: () => {dispatch(actions.minus())},
        handleColor: (color) => {dispatch(actions.color(color))}
    };
    // return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);