import React from 'react';
import { shallow } from 'enzyme';
import { expect, assert } from 'chai';
import sinon from 'sinon';

import DraggableButton from '../../lib/atoms/DraggableButton/DraggableButton';


describe('<DragabbleButton />', () => {

  it('renders with initial state correctly', () => {
    const wrapper = shallow(<DraggableButton />);
    const initialState = {
      iconName: null,
      text: null,
      axis: 'both',
      initialPosition: { x: 0, y: 0 },
      style: null
    };
    expect(wrapper.instance().state.iconName).to.equal(initialState.iconName);
    expect(wrapper.instance().state.text).to.equal(initialState.text);
    expect(wrapper.instance().state.axis).to.equal(initialState.axis);
    expect(wrapper.instance().state.initialPosition).to.eql(initialState.initialPosition);
    expect(wrapper.instance().state.style).to.equal(initialState.style);
    assert.exists(wrapper.instance().state.onStart);
    assert.exists(wrapper.instance().state.onDrag);
    assert.exists(wrapper.instance().state.onStop);
  });

  it('renders only icon when the icon property is given but no text', () => {
    const wrapper = shallow(<DraggableButton iconName='thumbs-up'/>);
    expect(wrapper.find('.icon')).to.have.lengthOf(1);
    expect(wrapper.find('.spanText')).to.have.lengthOf(0);
  });

  it('renders only text when the text property is given but no icon', () => {
    const wrapper = shallow(<DraggableButton text='Click me!'/>);
    const button = wrapper.find('.spanText');
    expect(button).to.have.lengthOf(1);
    expect(button.text()).to.be.eql('Click me!');
    expect(wrapper.find('.icon')).to.have.lengthOf(0);
  });

  it('renders only text when the text property is given but no icon', () => {
    const wrapper = shallow(<DraggableButton text='Click me!'/>);
    const button = wrapper.find('.spanText');
    expect(button).to.have.lengthOf(1);
    expect(button.text()).to.be.eql('Click me!');
    expect(wrapper.find('.icon')).to.have.lengthOf(0);
  });

  it('executes onClick function', () => {
    const mockOnClick = sinon.spy();
    const wrapper = shallow(<DraggableButton text='Click me!' onClick={mockOnClick}/>);
    wrapper.find('button').simulate('click', { preventDefault() {} });
    expect(mockOnClick).to.have.property('callCount', 1);
  });

});