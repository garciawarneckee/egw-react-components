import React, { Component } from "react";
import PropTypes from 'prop-types';
import Dragabble from "react-draggable";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default class DragabbleButton extends Component {

  constructor(props) {
    super(props);
  }

  setButtonContent(iconName, text) {
    if(iconName && text) {
      return (
        <div>
          <FontAwesomeIcon icon={iconName} />  
          <span>{ text }</span>
        </div>
      ) 
    } else if(iconName) {
        return (
          <FontAwesomeIcon icon={iconName} />
        )
    } else { return text; }
  }

  render() {
    
    const { 
      iconName,
      text,
      axis, 
      initialPosition, 
      style, 
      onStart, 
      onDrag, 
      onStop } = this.props;
      
      let buttonContent = this.setButtonContent(iconName, text);

    return (
      <Dragabble 
        axis = { axis ? axis : "both" } 
        bounds = 'html'
        handle = ".dnd" 
        defaultPosition = { initialPosition ? initialPosition : { x: 0, y: 0 }}
        onStart = { onStart ? onStart : () => {} }
        onDrag = { onDrag ? onDrag : () => {} } 
        onStop = { onStop ? onStop : () => {} } 
        >
        <button className="dnd" style = { style ? style : null }>
          { buttonContent }
        </button>
      </Dragabble>
    );
  }

}

DragabbleButton.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  axis: PropTypes.string,
  defaultPosition: PropTypes.object,
  style: PropTypes.object,
  onStart: PropTypes.func,
  onDrag: PropTypes.func,
  onStop: PropTypes.func
}

