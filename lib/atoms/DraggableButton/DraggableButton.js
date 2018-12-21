import React, { Component } from "react";
import PropTypes from 'prop-types';
import Dragabble from 'react-draggable';
import IconProvider from '../IconProvider/IconProvider';

export default class DragabbleButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      iconName: null,
      text: null,
      axis: 'both',
      initialPosition: { x: 0, y: 0 },
      style: null,
      onStart: () => {},
      onDrag: () => {},
      onStop: () => {}
    }
  }

  setButtonContent(iconName, text) {
    const fontAwesomeIcon = (<IconProvider className='icon' iconName={iconName}/>); 
    const textSpan = (<span className='spanText'>{ text }</span>);
    if(iconName && text) {
      return (
        <div>
          { fontAwesomeIcon }
          { textSpan }
        </div>
      ) 
    } else if(iconName) {
        return (<div> { fontAwesomeIcon } </div>)
    } else { return( <div>{ textSpan } </div>) }
  }

  render() {
    const state = this.state;
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
        axis = { axis ? axis : state.axis } 
        bounds = 'html'
        handle = '.dnd' 
        defaultPosition = { initialPosition ? initialPosition : state.initialPosition }
        onStart = { onStart ? onStart : state.onStart }
        onDrag = { onDrag ? onDrag : state.onDrag } 
        onStop = { onStop ? onStop : state.onStop } 
        >
        <button className="dnd" style = { style ? style : state.style }>
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

