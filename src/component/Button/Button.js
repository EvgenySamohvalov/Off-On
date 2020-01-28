import React, {Component} from 'react'

import './Button.css'
import axios from 'axios'
// import { connect } from 'react-redux';

class Button extends Component {
    constructor() {
        super();

        this.state = {
            stateButton: 'Off'
        }

        axios.get('https://off-on-3e272.firebaseio.com/button.json')
        .then(
            response => {
                console.log(response.data.stateButton)
                this.setState({stateButton:response.data.stateButton})
            }
        )
    }

    switchButton = () => {
        this.state.stateButton === 'Off' ?
        this.setState({ stateButton: 'On'}):
        this.setState({ stateButton: 'Off'})
    }

    render() {

        return (
            <button className={this.state.stateButton === 'Off'? 'Button Off': 'Button On'} onClick={this.switchButton}>
                {this.state.stateButton}
            </button>
        ) 
    }

    componentDidUpdate() {

        axios.put('https://off-on-3e272.firebaseio.com/button.json', this.state)
        .then(response => {

        })

    }

    componentWillUnmount() {
        this.setState({ stateButton: 'Off'})
        axios.put('https://off-on-3e272.firebaseio.com/button.json', this.state)
        .then(response => {

        })
    }
}

// function mapStateToProps(state) {
//     return {
//         stateButton: state.button.stateButton
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         fetchButton: () => dispatch(fetchButton())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Button)

export default Button


// off-on-3e272

// https://off-on-3e272.firebaseio.com/