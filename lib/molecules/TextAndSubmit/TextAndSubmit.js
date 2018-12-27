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
      theme, 
      inputStyle, 
      btnStyle, 
      onSubmit } = this.props;

    const themeClasses = classnames(`txtnsubmit txtnsubmit--${theme}`);
    const themeInputClasses = classnames(`txtnsubmit txtnsubmit--${theme} txtnsubmit--input`);
    const themeSubmitClasses = classnames(`txtnsubmit txtnsubmit--${theme} txtnsubmit--submit`);
    
    return (
      <form 
        className={themeClasses}
        onSubmit={onSubmit || this.defaultSubmit } 
        style={{ visibility: isVisible ? 'visible' : 'hidden'}}>
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
      </form>
    )
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