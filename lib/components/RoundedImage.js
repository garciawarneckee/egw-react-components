import React, { Component } from 'react'
import '../styles/Common.css'

export default class RoundedImage extends Component {
    render() {
        return(
            <div> 
                <img src={ this.props.src } alt='' className={ "Rounded " + this.props.injectedStyle } />
            </div>
        )
    }
} 