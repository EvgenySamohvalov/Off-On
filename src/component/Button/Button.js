import React, {Component} from 'react'

import './Button.css'
import axios from 'axios'
import { connect } from 'react-redux';

class Button extends Component {
    constructor() {
        super();
        axios.get('https://off-on-3e272.firebaseio.com/button.json')
        .then(
            response => {
                this.props.setFirstStateButton(response.data.stateButton)
            }
        )
    }

    render() {
        return (
            <button className={this.props.stateButton ? 'Button On': 'Button Off'} onClick={this.props.switchButton}>
                { this.props.stateButton ?'On':'Off' }
            </button>
        ) 
    }

    componentDidUpdate() {
        axios.put('https://off-on-3e272.firebaseio.com/button.json', this.props.stateButton)
    }
}

function mapStateToProps(state) {
    return {
        stateButton: state.button.stateButton
    }
}

function mapDispatchToProps(dispatch) {
    return {
        switchButton: () => dispatch({type:'SWITCH'}),
        setFirstStateButton: state => dispatch({type:'SFSB', payload:state})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)