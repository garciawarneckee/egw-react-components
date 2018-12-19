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

  it('reders with explicit small size and default image', () => {
    const wrapper = shallow(<RoundedImage size="small"/>);
    expect(wrapper.instance().state.currentSize).to.equal('small');
    expect(wrapper.find('img').prop('src')).to.equal('test-file-stub');
  });

  it('reders with medium size and default image', () => {
    const wrapper = shallow(<RoundedImage size="medium"/>);
    expect(wrapper.instance().state.currentSize).to.equal('medium');
    expect(wrapper.find('img').prop('src')).to.equal('test-file-stub');
  });

  it('reders with large size and default image', () => {
    const wrapper = shallow(<RoundedImage size="large"/>);
    expect(wrapper.instance().state.currentSize).to.equal('large');
    expect(wrapper.find('img').prop('src')).to.equal('test-file-stub');
  });

});