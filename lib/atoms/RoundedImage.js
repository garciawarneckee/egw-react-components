import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Common.css';

/**
 * This component will rended a rounded image with a different sizes.
 * @param src   The path where the iamge to diplay is. If this param is not setted, will rended a 
 *              not found image generic image.
 * @param size  The size of the image. Described in RoundedImageSizes.
 * @param style	Custom style to add in the generated circle.
 */

export default class RoundedImage extends Component {
	
	constructor(props) {
		super(props);
		this.state = { 
			defaultSize: { 'width': '100px', height: '100px' } 
		} 
	}

	setWidth(size) {  
		return (size) ?
		 RoundedImageSizes[size] : RoundedImageSizes['small'];
	}

	render() {
		const { src, size, style } = this.props;
		const img = (src) ? src : require('../assets/images/no-image-available.png');
		const imgSize = (size) ? this.setWidth(size) : this.state.defaultSize;
		const finalStyle = Object.assign({}, style, imgSize);
      return (
      	<div> 
        	<img src={ img } alt='' className="Rounded" style={ finalStyle } />
      	</div>
      )
	}
	
} 

const RoundedImageSizes = {
  small:  { 'width': '100px', height: '100px' },
  medium: { 'width': '200px', height: '200px' },
  large:  { 'width': '300px', height: '300px' }
}

RoundedImage.propTypes = {
	src: PropTypes.string,
	size: PropTypes.size,
	style: PropTypes.object
}