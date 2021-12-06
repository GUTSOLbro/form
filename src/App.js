import React from 'react';
import { validationEmail, validationPassword } from './validation';
import Input from './components/input/input';
import Button from './components/button/button';
import './reset.module.scss';
import style from './App.module.scss';
function App() {
  let [emailInputActive, setEmailInputActive] = React.useState(false);
  let [passwordInputActive, setPasswordInputActive] = React.useState(false);
  let [emailValue, setEmailValue] = React.useState('');
  let [passwordValue, setPasswordValue] = React.useState('');
  let [emailError, setEmailError] = React.useState('');
  let [passwordError, setPasswordError] = React.useState('');
  let [emailStatus, setEmailStatus] = React.useState(false);
  let [passwordStatus, setPasswordStatus] = React.useState(false);
  let [buttonStatus, setButtonStatus] = React.useState(false);

  let setInputStatus = React.useCallback((event) => {
    if (event.target.name == 'email' && event.target.value == '') {
      setEmailInputActive(false);
    }
    if (event.target.name == 'password' && event.target.value == '') {
      setPasswordInputActive(false);
    }
  }, []);

  let changeInput = React.useCallback((event) => {
    setInputStatus(event);
    if (event.target.name == 'email') {
      setEmailValue(event.target.value);
    } else if (event.target.name == 'password') {
      setPasswordValue(event.target.value);
    }
  }, []);

  let updateButtonStatus = React.useCallback(() => {
    if (emailStatus && passwordStatus) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  }, []);

  let setErrorMassege = React.useCallback((event) => {
    if (event.target.name == 'email') {
      if (!validationEmail.test(String(event.target.value).toLowerCase())) {
        setEmailError('E-mail is not correct');
        setEmailStatus(false);
        emailStatus = false;
      } else {
        setEmailError('');
        setEmailStatus(true);
        emailStatus = true;
      }
    } else if (event.target.name == 'password') {
      if (!validationPassword.test(String(event.target.value).toLowerCase())) {
        setPasswordError('8 characters, latin letters, numbers');
        setPasswordStatus(false);
        passwordStatus = false;
      } else {
        setPasswordError('');
        setPasswordStatus(true);
        passwordStatus = true;
      }
    }
  }, []);

  return (
    <form className={style.form} action="#">
      <Input
        name="email"
        InputActive={emailInputActive}
        Error={emailError}
        value={emailValue}
        setInputActive={setEmailInputActive}
        setErrorMassege={setErrorMassege}
        changeInput={changeInput}
        updateButtonStatus={updateButtonStatus}
      />
      <Input
        name="password"
        InputActive={passwordInputActive}
        Error={passwordError}
        value={passwordValue}
        setInputActive={setPasswordInputActive}
        setErrorMassege={setErrorMassege}
        changeInput={changeInput}
        updateButtonStatus={updateButtonStatus}
      />

      <Button action="LOGIN" buttonStatus={buttonStatus} />
    </form>
  );
}

export default App;
