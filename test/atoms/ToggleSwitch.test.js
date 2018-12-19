import React from 'react';
import { shallow } from 'enzyme';
import { expect, assert } from 'chai';

import ToggleSwitch from '../../lib/atoms/ToggleSwitch/ToggleSwitch';

describe('<ToggleSwitch />', () => {

  it('renders off with default theme', () => {
    const wrapper = shallow(<ToggleSwitch enabled={false}/>);
    expect(wrapper.find('.switch')).to.have.lengthOf(1);
    expect(wrapper.find('.switch-toggle')).to.have.lengthOf(1);
    expect(wrapper.find('.switch-toggle--off')).to.have.lengthOf(1);
  });

  it('renders on with default theme', () => {
    const wrapper = shallow(<ToggleSwitch enabled={true}/>);
    expect(wrapper.find('.switch')).to.have.lengthOf(1);
    expect(wrapper.find('.switch-toggle')).to.have.lengthOf(1);
    expect(wrapper.find('.switch-toggle--on')).to.have.lengthOf(1);
  });

})