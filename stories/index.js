import React from 'react';
import {
  storiesOf
} from '@storybook/react';

import DragabbleButton from '../lib/atoms/DraggableButton';
import RoundedImage from '../lib/atoms/RoundedImage';

storiesOf('DraggableButton', module)

  .add('Default button with some icon', () => ( 
    <DragabbleButton iconName="thumbs-up" />
  ))
  .add('Default button with some text', () => ( 
    <DragabbleButton text="Click me" />
  ))
  .add('Default button with some icon and some text', () => ( 
    <DragabbleButton iconName="thumbs-up" text="Click me" />
  ))
  .add('Custom style button with some icon', () => ( 
    <DragabbleButton iconName='thumbs-up'
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
  .add('Custom style button with some icon and custom initial position ', () => ( 
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
    initialPosition={{ x: 250, y: 150 }} 
    />
  ))
  .add('Custom style button with some icon and custom behavior', () => ( 
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
  ));

  storiesOf('RoundedImage', module)
    .add('Default rounded image and default size', () => (
      <RoundedImage />
    ))
    .add('Custom rounded image, default size', () => (
      <RoundedImage 
      src="https://pre00.deviantart.net/9bf8/th/pre/i/2015/106/6/e/naruto_render_by_fuumayahiko-d7ykjzg.png"
      style={{ border: '1px solid black' }}
      />

    ))
    .add('Custom rounded image medium size', () => (
      <RoundedImage 
      src="https://pre00.deviantart.net/9bf8/th/pre/i/2015/106/6/e/naruto_render_by_fuumayahiko-d7ykjzg.png"
      size="medium"
      style={{ border: '1px solid black' }}
      />
    ))
    .add('Custom rounded image large size', () => (
      <RoundedImage 
      src="https://pre00.deviantart.net/9bf8/th/pre/i/2015/106/6/e/naruto_render_by_fuumayahiko-d7ykjzg.png"
      size="large"
      style={{ border: '1px solid black' }}
      />
    ));




    