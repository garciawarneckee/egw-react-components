import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import TextAndSubmit from '../../lib/molecules/TextAndSubmit/TextAndSubmit';

describe('<TextAndSubmit />', () => {

  it('renders elements correctly', () => {
    const wrapper = shallow(<TextAndSubmit isVisible={true}/>);
    expect(wrapper.find('form')).to.have.lengthOf(1);
    expect(wrapper.find('input')).to.have.lengthOf(1);
    expect(wrapper.find('button')).to.have.lengthOf(1);
  });

  it('not render when isVisible is false', () => {
    const wrapper = shallow(<TextAndSubmit isVisible={false}/>);
    expect(wrapper.find('form')).to.have.lengthOf(0);
    expect(wrapper.find('input')).to.have.lengthOf(0);
    expect(wrapper.find('button')).to.have.lengthOf(0);
  });

  it('execute onSubmit function', () => {
    const mockOnSubmit = sinon.spy();
    const wrapper = shallow(<TextAndSubmit 
      isVisible={true} 
      onSubmit={mockOnSubmit}/>);
      wrapper.find('form').simulate('submit', { preventdefault() {} });
      expect(mockOnSubmit).to.have.property('callCount', 1);
  });

});