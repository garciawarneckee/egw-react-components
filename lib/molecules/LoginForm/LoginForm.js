import React, { Component } from 'react';
import classnames from 'classnames';

import './LoginForm.css';

/** 
 * Simple login form 
 * 
 * @param { String }    usernamePlaceholder  text to display in the username input, if it is not provided "What's your username" wil be displayed.
 * @param { String }    passwordPlaceholder  text to display in the password input, if it is not provided "What's your password" wil be displayed.
 * @param { String }    sumitText            text to display in the login button, if it is not provided "Login" wil be displayed.
 * @param { String }    theme                colors and style to apply to the whole component.
 * @param { Function }  onSubmit             what to execute when the submit button is clicked, if it is not provided nothing gonna happend.
 * 
 * */
class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.defaultSubmit = this.defaultSubmit.bind(this);
  }

  defaultSubmit(e) { 
    e.preventDefault(); 
  }

  render() {
    
    const { usernamePlaceholder, passwordPlaceholder, submitText, theme, onSubmit } = this.props;
    const themeToApply = theme || 'default';
    const classLogin = classnames(
      `login-form-container login-form-container--${themeToApply}`
    );
    const classesBtn = classnames(`btn btn--${themeToApply}`);
    const classesInput = classnames(`input input--${themeToApply}`);
    const onSubmitFunc = onSubmit || this.defaultSubmit;  

    return (
      <form className={classLogin} onSubmit={onSubmitFunc}>
        <input
          id='username-input'
          name='username-input'
          placeholder={usernamePlaceholder || `What's your username`}          
          className={classesInput}
          type='text'
        />

        <input
          id='password-input'
          name='password-input'
          placeholder={passwordPlaceholder || 'Your shall not pass word...'}
          className={classesInput}
          type='password'
        />

        <input 
          id="login-btn"
          name="login-btn" 
          className={classesBtn} 
          value={submitText || 'Login'}
          type='submit'/> 
      </form>
    );
  }
}

export default LoginForm;
