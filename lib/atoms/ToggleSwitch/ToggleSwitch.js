import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { isBoolean, isFunction } from '../../helpers/types.helper';
import './index.css';

export default class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = { enabled: this.enabledFromProps() }
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  isEnabled (){ return this.state.enabled }

  /** 
   * Determines if the component is on or off by reading the enabled prop and doing the right execution
   * if that prop is a function or boolean.
   */
  enabledFromProps() {
    let { enabled } = this.props;
    enabled = (isFunction(enabled)) ? enabled() : enabled;
    return (isBoolean(enabled)) && enabled;
  }

  /**
   * This method acts as a click listener, it first change the enabled state using setState
   * then fired the onClick callback (with the obligatory event first argument and with the SWITCH_STATE prop with new state)
   * and then thw onStateChanged callback;
   */
  toggleSwitch(e) {
    e.persist();
    e.preventDefault();
    
    const { onClick, onStateChanged } = this.props;

    this.setState({ enabled: !this.state.enabled}, () => {
      const state = this.state;
      const switchEvent = Object.assign(e, { SWITCH_STATE: state});
      isFunction(onClick) && onClick(switchEvent);
      isFunction(onStateChanged) && onStateChanged(state);
    });
  }
		 
  render() {
    const { enabled } = this.state;
    const { enabled: _enabled, theme, onClick, className, onStateChanged, ...restProps } = this.props;
    const switchTheme = (theme && isString(theme)) ? theme: 'default';
    const switchClasses = classnames(
      `switch switch--${switchTheme}`,
      className
    );
    console.log(`applied switch theme: ${switchClasses}`)

    const togglerClasses = classnames(
      'switch-toggle',
      `switch-toggle--${enabled ? 'on' : 'off'}`
    );

    console.log(`applied toggler theme: ${togglerClasses}`)

    return (
      <div className={switchClasses} onClick={this.toggleSwitch} {...restProps}>
        <div className={togglerClasses}></div>
      </div>
    )

  }
}

ToggleSwitch.propTypes = {
  theme: PropTypes.string,
  enabled: PropTypes.oneOfType([
    //This could be a boolean value or a function that retieves a boolean function
    PropTypes.bool,
    PropTypes.func
  ]),
  onStateChanged: PropTypes.func
}