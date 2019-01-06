import React from 'react';
import LoginForm from "../../lib/molecules/LoginForm/LoginForm";
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

describe('<LoginForm />', () => {

  it('renders elements all elements when no props are passed', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('form')).to.have.lengthOf(1);
    expect(wrapper.find('#username-input')).to.have.lengthOf(1);
    expect(wrapper.find('#password-input')).to.have.lengthOf(1);
    expect(wrapper.find('#login-btn')).to.have.lengthOf(1);
  });

  it('render with custom placeholders', () => {
    const usernamePlaceholder = "Custom username placegolder";
    const passwordPlaceholder = "Custom password placeholder";
    const submitText = "Custom submit text";
    const wrapper = shallow(<LoginForm usernamePlaceholder={ usernamePlaceholder } passwordPlaceholder= { passwordPlaceholder } submitText = { submitText }/>);
    expect(wrapper.find('#username-input').props().placeholder).to.equal(usernamePlaceholder);
    expect(wrapper.find('#password-input').props().placeholder).to.equal(passwordPlaceholder);
    expect(wrapper.find('#login-btn').props().value).to.equal(submitText);
  });

  it('execute custom function when it is passed', () => {
    const mockOnSubmit = sinon.spy();
    const wrapper = shallow(<LoginForm onSubmit={ mockOnSubmit }/>);
    wrapper.find('form').simulate('submit', { preventdefault() {} });
    expect(mockOnSubmit).to.have.property('callCount', 1);
  });

});