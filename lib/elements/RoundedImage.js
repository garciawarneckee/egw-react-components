import React, { Component } from 'react'
import '../styles/Common.css'

import styled from 'styled-components'

export default class RoundedImage extends Component {
    render() {
        return(
            <div> 
                <img src={ this.props.src } alt='' className={ "Rounded" } style={ this.setWidth() } />
             </div>
        )
    }

    setWidth() { return RoundedImageSizes[this.props.size] }
} 

const RoundedImageSizes = {
    small: { 'width': '100px' },
    medium: { 'width': '200px' },
    large: { 'large': '300px' }
}