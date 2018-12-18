import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import DragabbleButton from '../lib/atoms/DraggableButton';

storiesOf('DraggableButton', module)

  .add('Default button with some icon', () => ( 
    <DragabbleButton iconName = "thumbs-up" />
  ))
  .add('Custom style button with some icon', () => ( 
    <DragabbleButton iconName = 'thumbs-up'
    style = {
      {
        backgroundColor: '#809fff',
        color: 'white',
        padding: '2%',
        borderRadius: '4px'
      }
    }
    />
  ))
  .add('Custom style button with some icon and only X axis move ', () => ( 
    <DragabbleButton 
    iconName='thumbs-up'
    style = {
      {
        backgroundColor: '#809fff',
        color: 'white',
        padding: '2%',
        borderRadius: '4px'
      }
    }
    axis = 'x' 
    />
  ))
  .add('Custom style button with some icon and only Y axis move ', () => ( 
    <DragabbleButton 
    iconName='thumbs-up'
    style = {
      {
        backgroundColor: '#809fff',
        color: 'white',
        padding: '2%',
        borderRadius: '4px'
      }
    }
    axis = 'y' 
    />
  ))
  .add('Custom style button with some icon and custom position ', () => ( 
    <DragabbleButton 
    iconName='thumbs-up'
    style = {
      {
        backgroundColor: '#809fff',
        color: 'white',
        padding: '2%',
        borderRadius: '4px'
      }
    }
    defaultPosition={{ x: 250, y: 150 }} 
    />
  ))
  .add('Custom style button with some icon and custom behavior ', () => ( 
    <DragabbleButton 
    iconName='thumbs-up'
    style = {
      {
        backgroundColor: '#809fff',
        color: 'white',
        padding: '2%',
        borderRadius: '4px'
      }
    }
    onStart = { () => { console.log('Starting dragging') }}
    onDrag = { (event) => { console.log(`X: ${event.x} Y: ${event.y}`) }}
    onStop = { () => { console.log('Stop dragging') }}
    />
  ))