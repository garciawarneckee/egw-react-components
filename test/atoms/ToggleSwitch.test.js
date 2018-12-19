import React from 'react';
import { shallow } from 'enzyme';
import { expect, assert } from 'chai';

import ToggleSwitch from '../../lib/atoms/ToggleSwitch/ToggleSwitch';

describe('<ToggleSwitch />', () => {

  it('renders with default theme', () => {
    const wrapper = shallow(<ToggleSwitch />);
    expect(wrapper.find('.switch')).to.have.lengthOf(1);
    expect(wrapper.find('.switch--default')).to.have.lengthOf(1);
    expect(wrapper.find('.switch-toggle')).to.have.lengthOf(1);
  })

  it('renders with graphite-small theme', () => {
    const wrapper = shallow(<ToggleSwitch  theme='graphite-small'/>);
    expect(wrapper.find('.switch')).to.have.lengthOf(1);
    expect(wrapper.find('.switch--graphite-small')).to.have.lengthOf(1);
    expect(wrapper.find('.switch-toggle')).to.have.lengthOf(1);
  });

  it('renders off', () => {
    const wrapper = shallow(<ToggleSwitch enabled={false}/>);
    expect(wrapper.find('.switch-toggle')).to.have.lengthOf(1);
    expect(wrapper.find('.switch-toggle--on')).to.have.lengthOf(0);
    expect(wrapper.find('.switch-toggle--off')).to.have.lengthOf(1);
  });

  it('renders on', () => {
    const wrapper = shallow(<ToggleSwitch enabled={true}/>);
    expect(wrapper.find('.switch-toggle')).to.have.lengthOf(1);
    expect(wrapper.find('.switch-toggle--on')).to.have.lengthOf(1);
    expect(wrapper.find('.switch-toggle--off')).to.have.lengthOf(0);
  });



})