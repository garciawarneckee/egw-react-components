import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TextAndSubmit.css';

export default class TextAndSubmit extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' }
    this.onChange = this.onChange.bind(this);
    this.defaultSubmit = this.defaultSubmit.bind(this);
  }

  defaultSubmit = (e) => { e.preventDefault() }

  onChange =  e => { this.setState({value: e.target.value}); }

  render() {
    const { 
      isVisible, 
      placeholder, 
      submitText,
      formStyle,
      theme, 
      inputStyle, 
      btnStyle, 
      onSubmit } = this.props;

    const themeClasses = classnames(`txtnsubmit txtnsubmit--${theme}`);
    const themeInputClasses = classnames(`input input--${theme} txtnsubmit txtnsubmit--input`);
    const themeSubmitClasses = classnames(`btn btn--${theme} txtnsubmit txtnsubmit--submit`);
    
    const renderForm = isVisible ? (
      <form 
        style={formStyle}
        className={themeClasses}
        onSubmit={onSubmit || this.defaultSubmit } 
      >
        <input
          value={this.state.value}
          onChange={this.onChange}
          className={themeInputClasses}
          style={inputStyle || null}
          type='text'
          placeholder={placeholder}/>
        <button
          type='submit'
          className={themeSubmitClasses}
          style={btnStyle || null}> {submitText || 'submit'} </button>
    </form>) : null;

    return renderForm;
  }
}

TextAndSubmit.propTypes = {
  isVisible: PropTypes.bool,
  placeholder: PropTypes.string,
  submitText: PropTypes.string,
  theme: PropTypes.string,
  inputStyle: PropTypes.object,
  btnStyle: PropTypes.object,
  onSubmit: PropTypes.func
}