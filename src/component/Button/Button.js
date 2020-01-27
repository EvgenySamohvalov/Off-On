import React, {Component} from 'react'

import './Button.css'
import axios from 'axios'
// import { connect } from 'react-redux';

class Button extends Component {
    constructor() {
        super();

        this.state = {
            stateButton: 'On'
        }

        axios.get('https://off-on-3e272.firebaseio.com/button.json').then(
            response => {
                this.setState({response.data})
            }
        )
    }

    // switchButton = () => {
    //     this.state.stateButton === 'Off' ?
    //     this.setState({ stateButton: 'On'}):
    //     this.setState({ stateButton: 'Off'})
    // }

    switchButton = () => {
        this.state.stateButton === 'Off' ?
        this.setState({ stateButton: 'On'}):
        this.setState({ stateButton: 'Off'})
        axios.put('https://off-on-3e272.firebaseio.com/button.json', this.state)
        .then(response => {
            // console.log(response)
        })
        .catch(error => console.error(error))
    }


    componentDidMount() {
        axios.get('https://off-on-3e272.firebaseio.com/button.json').then(
            response => {
                console.log(response.data)
            }
        )
    }

    render() {
        return (
            <button className={this.state.stateButton === 'Off'? 'Button Off': 'Button On'} onClick={this.switchButton}>
                {this.state.stateButton}
            </button>
        ) 
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