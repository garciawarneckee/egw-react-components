import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import IconProvider from '../../lib/atoms/IconProvider/IconProvider';

describe('<IconProvider />', () => {

  it('renders with initial state correctly', () => {
    const wrapper = shallow(<IconProvider iconName='thumbs-up'/>);
    expect(wrapper.find('FontAwesomeIcon')).to.have.lengthOf(1);
  });    

});