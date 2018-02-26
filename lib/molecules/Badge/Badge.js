import React, { Component } from 'react'
import RoundedImage from '../../atoms/RoundedImage'

import './Badge.css'
/**
 * This component will render a card which have a rounded image and a label.
 * Porpouse: List achievements, features, skills, etc which need only a label and a image to decribe it.
 */

export default class Badge extends Component {
    render(){ 
        return(
            <div className="Badge-Container">
                <RoundedImage  size="small"/>
                <p className="Badge-Name"> { this.props.name } </p>
            </div>
        )
     }
}