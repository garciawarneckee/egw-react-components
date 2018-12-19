import React from 'react';
import { shallow } from 'enzyme';
import { expect, assert } from 'chai';
import sinon from 'sinon';

import RoundedImage from '../../lib/atoms/RoundedImage/RoundedImage';
import defaultImage from "../../assets/images/no-image-available.png";

describe('<RoundedImage />', () => {

  it('reders with default size (small) and default image', () => {
    const wrapper = shallow(<RoundedImage />);
    expect(wrapper.instance().state.defaultSize).to.eql({'width': '100px', height: '100px' });
    expect(wrapper.find('img').prop('src')).to.equal('test-file-stub');
  });

});