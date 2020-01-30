import React, {Component} from 'react'

import './Button.css'
import axios from 'axios'
// import { connect } from 'react-redux';

class Button extends Component {
    constructor() {
        super();

        this.state = {
            stateButton: false
        }

        axios.get('https://off-on-3e272.firebaseio.com/button.json')
        .then(
            response => {
                this.setState({stateButton:response.data.stateButton})
            }
        )
    }

    switchButton = () => {
        this.setState({ stateButton: !this.state.stateButton})
    }

    render() {

        return (
            <button className={this.state.stateButton ? 'Button On': 'Button Off'} onClick={this.switchButton}>
                { this.state.stateButton ?'On':'Off' }
            </button>
        ) 
    }

    componentDidUpdate() {
        axios.put('https://off-on-3e272.firebaseio.com/button.json', this.state)
    }

    componentWillUnmount() {
        this.setState({ stateButton: false})
        axios.put('https://off-on-3e272.firebaseio.com/button.json', this.state)
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



// ываываы