import React from 'react';
import {
  storiesOf
} from '@storybook/react';

import DragabbleButton from '../lib/atoms/DraggableButton/DraggableButton';
import RoundedImage from '../lib/atoms/RoundedImage/RoundedImage';
import ToggleSwitch from '../lib/atoms/ToggleSwitch/ToggleSwitch';
import TextAndSubmit from '../lib/molecules/TextAndSubmit/TextAndSubmit';

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
    onStart = { () => { alert('Starting dragging') }}
    onDrag = { (event) => { alert(`X: ${event.x} Y: ${event.y}`) }}
    onStop = { () => { alert('Stop dragging') }}
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

  storiesOf('ToggleSwitch', module)
    .add('Default toggle switch', () => ( 
      <ToggleSwitch 
        theme="default"
        className="app-switch"
        enabled={false}
      />
    ))
    .add('Default toggle switch with custom behavior', () => ( 
      <ToggleSwitch 
        theme="default"
        className="app-switch"
        enabled={false}
        onStateChanged={ () => { alert('I have changed my status') }}
      />
    ))
    .add('Ghrapite small toggle switch', () => ( 
      <ToggleSwitch 
        theme="graphite-small"
        className="app-switch"
        enabled={false}
      />
    ))

    storiesOf('TextAndSubmit', module)
      .add('Default render', () => (
        <TextAndSubmit
          isVisible={true} 
        />
      ))
      .add('With custom placeholder', () => (
        <TextAndSubmit
          isVisible={true} 
          placeholder="A placeholder..."
        />
      ))
      .add('With custom placeholder and submit button text', () => (
        <TextAndSubmit
          isVisible={true} 
          placeholder="A placeholder..."
          submitText="Send it!"
        />
      ))
      .add('With custom style', () => {
        const style = {
          padding: '1%',
          border: 'grey 1px solid',
          borderRadius: '4px',
        }
        return (
          <TextAndSubmit
            isVisible={true} 
            placeholder="A placeholder..."
            submitText="Send it!"
            inputStyle={style}
            btnStyle={style}
          />
        )} 
      )
      .add('With default theme', () => 
        (
          <TextAndSubmit
            isVisible={true} 
            placeholder="A placeholder..."
            submitText="Send it!"
            theme="default"
          />
        ) 
      )
      .add('With danger theme', () => 
      (
        <TextAndSubmit
          isVisible={true} 
          placeholder="A placeholder..."
          submitText="Send it!"
          theme="danger"
        />
      )) 
      .add('With ocean theme', () => 
      (
        <TextAndSubmit
          isVisible={true} 
          placeholder="A placeholder..."
          submitText="Send it!"
          theme="ocean"
        />
      )) 
      .add('With onSubmit custom function', () => 
      (
        <TextAndSubmit
          isVisible={true} 
          placeholder="A placeholder..."
          submitText="Send it!"
          theme="danger"
          onSubmit={ () => { alert('executing custom onSubmit function') } }
        />
      ))
    
    