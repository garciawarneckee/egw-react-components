import React, { Component } from 'react'
import '../styles/Common.css'

/**
 * This component will rended a rounded image with a different sizes.
 * @param src   The path where the iamge to diplay is. If this param is not setted, will rended a 
 *              not found image generic image.
 * @param size  The size of the image. Described in RoundedImageSizes.
 */

export default class RoundedImage extends Component {
    render() {
        const imgSrc = this.props.src ? 
                        require(this.props.src) : require('../assets/images/no-image-available.png')
        return(
            <div> 
                <img src={ imgSrc } alt='' className={ "Rounded" } style={ this.setWidth() } />
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