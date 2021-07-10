import React, {useState, useEffect} from 'react'
import {RouteComponentProps, withRouter} from 'react-router'
import {SubmitButton} from '../../components/button/ButtonComponents'
import {BasicForm} from '../../components/form/FormComponents'
import {EmailInput, PasswordInput} from '../../components/input/InputComponents'
import {BasicText} from '../../components/text/TextComponents'
import {LoginClient} from '../../services/login/LoginService'

import './Login.scss'

import {ERROR_MESSAGE, LOGIN} from '../../constants/AppConstants'
import {BasicCard} from '../../components/card/CardComponents'
import {BasicImage} from '../../components/image/ImageComponents'
import {BasicContainer} from '../../components/container/ContainerComponents'
import {EMAIL_REGEX} from '../../utils/Regex'
import {BasicToast} from '../../components/alert/AlertComponents'
import {BasicLabel} from '../../components/label/LabelComponents'

const Login = ({history}: RouteComponentProps) => {
  const [showEmailError, setShowEmailError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<string>("")
  const [showPasswordError, setShowPasswordError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<string>("")
  const [loginEmail, setLoginEmail] = useState<string>("")
  const [loginPassword, setLoginPassword] = useState<string>("")
  const [showToast, setShowToast] = useState<boolean>(false)

  // Set title in the browser tab
  useEffect(() => {
    document.title = 'Login'
  })

  /**
   * Validate login email
   * 1) Checks if the field is empty
   * 2) Checks if input matches the regex
   * 
   * Output:
   * 1) If error, show appropriate error message below the input element and reset email state
   * 2) If success, set email to the state 
   */
  const checkLoginEmail = (e: React.FocusEvent<HTMLInputElement>) => {
    if(e.target.value === "") {
      setEmailError(ERROR_MESSAGE.EMPTY_FIELD)
      setShowEmailError(true)
    } else if(!EMAIL_REGEX.test(e.target.value)) {
      setEmailError(ERROR_MESSAGE.INVALID_EMAIL)
      setShowEmailError(true)
      setLoginEmail("")
    } else {
      setShowEmailError(false)
      setLoginEmail(e.target.value)
    }
  }

  /**
   * Validate login password
   * 1) Checks if the field is empty
   * 
   * Output:
   * 1) If error, show appropriate error message below the input element and reset password state
   * 2) If success, set password to the state 
   */
  const checkLoginPassword = (e: React.FocusEvent<HTMLInputElement>) => {
    if(e.target.value === "") {
      setPasswordError(ERROR_MESSAGE.EMPTY_FIELD)
      setShowPasswordError(true)
    } else {
      setShowPasswordError(false)
      setLoginPassword(e.target.value)
    }
  }

  /**
   * Perform login when
   * 1) Login email and password are available, show error toast otherwise or at failure
   * 2) Store token in local storage
   */
  const handleLogin = async (e: React.FormEvent<Element>) => {
    e.preventDefault()

    if(loginEmail !== "" && loginPassword !== "") {
      handleLoginToast(false)
      let token = await LoginClient({email: loginEmail, password: loginPassword})
      localStorage.setItem("token", token)
    } else {
      handleLoginToast(true)
    }
  }

  /**
   * Display or hide toast
   */
  const handleLoginToast = (show: boolean) => {
    setShowToast(show)
  }

  return (
    <BasicContainer className="bg-success">
      <BasicCard className="mt-5 w-25 mx-auto bg-white">
        <BasicForm onSubmit={handleLogin}>
          <div className="d-flex flex-column">
            <BasicImage className="mt-5 align-self-center login-logo" src="https://picsum.photos/200" alt="company logo" disableAccessibility={true} />

            <BasicText className="h1 mt-4 py-4 fw-normal fs-3 align-self-center" text={LOGIN} />

            <BasicLabel text="Email:" className="mt-3">
              <EmailInput name="email" ariaLabel="Email" onBlur={checkLoginEmail} />
              {
                showEmailError
                  ?
                  <BasicText className="text-danger m-0 fs-6" text={emailError} />
                  :
                  null
              }
            </BasicLabel>

            <BasicLabel text="Password:" className="mt-3">
              <PasswordInput name="password" ariaLabel="Password" onBlur={checkLoginPassword} />
              {
                showPasswordError
                  ?
                  <BasicText className="text-danger m-0 fs-6" text={passwordError} />
                  :
                  null
              }
            </BasicLabel>

            <SubmitButton className="mt-4 px-4 py-2 w-50 align-self-center" btnText="Submit" />
          </div>
        </BasicForm>
      </BasicCard >
      {
        showToast
          ?
          <BasicToast bodyMsg="Login failed" show={showToast} position="tr" onClose={handleLoginToast} />
          :
          null
      }
    </BasicContainer >
  )
}

export const LoginWithRouter = withRouter(Login)