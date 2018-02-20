import React, { Component } from 'react'
import '../assets/theme/Common.css'

export default class RoundedImage extends Component {
    render() {
        return(
            <div> 
                <img src={ this.props.src } alt='' className={ "Rounded " + this.props.injectedStyle } />
            </div>
        )
    }
} 