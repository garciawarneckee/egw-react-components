import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TextAndSubmit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  render() {
    const placeholder = this.props.placeholder ? this.props.placeholder : "";
    const isVisible = this.props.isVisible ? this.props.isVisible: false;
    const onChange = this.props.onChange ? this.props.onChange : () => {};
    const onSubmit = this.props.onSubmit ? thos.props.onSubmit : () => {};
    return (
      <form className="question-form" onSubmit={onSubmit}>
        <input
          value={this.state.value}
          onChange={onChange}
          className='textnsubmit'
          type='text'
          placeholder={this.props.placeholder }
          style={{
            visibility: isVisible ? 'visible' : 'hidden',
            bottom: isVisible ? '150%' : '0%'
          }} />
        <input
          type='submit'
          value='submit'
          className='submit-btn'
          style={{
            visibility: isVisible ? 'visible' : 'hidden',
            bottom: isVisible ? '150%' : '0%'
          }} />
      </form>
    )
  }
}

TextAndSubmit.propTypes = {
  placeholder: PropTypes.string,
  isVisible: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}