import React, { useContext, useState } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import Card from '../../shared/components/UIElements/Card';
import './Auth.css';
import Button from '../../shared/components/FormElements/Button';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

function Auth() {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = async (e) => {
    e.preventDefault();

    if (isLoginMode) {
      await sendRequest(
        'http://localhost:5000/api/users/login',
        'POST',
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        { 'Content-Type': 'application/json' }
      ).then((response) => auth.login(response.user.id));
    } else {
      await sendRequest(
        'http://localhost:5000/api/users/signup',
        'POST',
        JSON.stringify({
          name: formState.inputs.name.value,
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        { 'Content-Type': 'application/json' }
      ).then((response) => auth.login(response.user.id));
    }
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }

    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <Card className="padding authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name"
              onInput={inputHandler}
            />
          )}
          <Input
            id="email"
            type="email"
            label="Email"
            element="input"
            errorText="Please input a valid email."
            onInput={inputHandler}
            validators={[VALIDATOR_EMAIL()]}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            element="input"
            onInput={inputHandler}
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please input a valid password, at least 5 characters"
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? 'LOGIN' : 'SIGN UP'}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? 'SIGN UP' : 'LOGIN'}
        </Button>
      </Card>
    </>
  );
}

export default Auth;
