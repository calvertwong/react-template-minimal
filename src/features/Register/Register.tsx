import React, {useState, useEffect} from 'react'
import {RouteComponentProps, withRouter} from 'react-router'
import {SubmitButton} from '../../components/button/ButtonComponents'
import {BasicForm} from '../../components/form/FormComponents'
import {DateInput, EmailInput, PasswordInput, TextInput} from '../../components/input/InputComponents'
import {BasicText} from '../../components/text/TextComponents'
import {RegisterClient} from '../../services/register/RegisterService'

import {ERROR_MESSAGE, GENDER, FEATURE_NAMES} from '../../constants/AppConstants'
import {BasicCard} from '../../components/card/CardComponents'
import {BasicImage} from '../../components/image/ImageComponents'
import {BasicContainer, WrapperContainer} from '../../components/container/ContainerComponents'
import {DATE_REGEX, EMAIL_REGEX} from '../../utils/Regex'
import {BasicToast} from '../../components/alert/AlertComponents'
import {BasicDropDown} from '../../components/dropdown/DropDownComponents'
import {BasicLabel} from '../../components/label/LabelComponents'

import './Register.scss'

import {AppPaths} from '../../navigation/AppPaths'

const Register = ({history}: RouteComponentProps) => {
  const [showFirstNameError, setShowFirstNameError] = useState<boolean>(false)
  const [showLastNameError, setShowLastNameError] = useState<boolean>(false)
  const [showDobError, setShowDobError] = useState<boolean>(false)
  const [showEmailError, setShowEmailError] = useState<boolean>(false)
  const [showPasswordError, setShowPasswordError] = useState<boolean>(false)

  const [firstNameError, setFirstNameError] = useState<string>("")
  const [lastNameError, setLastNameError] = useState<string>("")
  const [dobError, setDobError] = useState<string>("")
  const [emailError, setEmailError] = useState<string>("")
  const [passwordError, setPasswordError] = useState<string>("")

  const [registerFirstName, setRegisterFirstName] = useState<string>("")
  const [registerLastName, setRegisterLastName] = useState<string>("")
  const [registerDob, setRegisterDob] = useState<string>("")
  const [registerGender, setRegisterGender] = useState<string>("")
  const [registerEmail, setRegisterEmail] = useState<string>("")
  const [registerPassword, setRegisterPassword] = useState<string>("")

  const [showToast, setShowToast] = useState<boolean>(false)

  // Set title in the browser tab
  useEffect(() => {
    document.title = FEATURE_NAMES.REGISTER
  })

  /**
   * Validate register first name
   * 1) Checks if the field is empty
   * 
   * Output:
   * 1) If error, show appropriate error message below the input element
   * 2) If success, set first name to the state 
   */
  const checkRegisterFirstName = (e: React.FocusEvent<HTMLInputElement>) => {
    if(e.target.value === "") {
      setFirstNameError(ERROR_MESSAGE.EMPTY_FIELD)
      setShowFirstNameError(true)
    } else {
      setShowFirstNameError(false)
      setRegisterFirstName(e.target.value)
    }
  }

  /**
 * Validate register last name
 * 1) Checks if the field is empty
 * 
 * Output:
 * 1) If error, show appropriate error message below the input element
 * 2) If success, set last name to the state 
 */
  const checkRegisterLastName = (e: React.FocusEvent<HTMLInputElement>) => {
    if(e.target.value === "") {
      setLastNameError(ERROR_MESSAGE.EMPTY_FIELD)
      setShowLastNameError(true)
    } else {
      setShowLastNameError(false)
      setRegisterLastName(e.target.value)
    }
  }

  /**
* Validate register dob
* 1) Checks if the field is empty
* 2) Checks if input matches the regex
* 3) Checks if the input is a future date
* 
* Output:
* 1) If error, show appropriate error message below the input element
* 2) If success, set dob to the state 
*/
  const checkRegisterDob = (e: React.FocusEvent<HTMLInputElement>) => {
    const enteredDate: Date = new Date(e.target.value)
    const todaysDate: Date = new Date()

    if(e.target.value === "") {
      setDobError(ERROR_MESSAGE.EMPTY_FIELD)
      setShowDobError(true)
    } else if(!DATE_REGEX.test(e.target.value)) {
      setDobError(ERROR_MESSAGE.INVALID_DATE)
      setShowDobError(true)
      setRegisterDob("")
    } else if(enteredDate > todaysDate) {
      setDobError(ERROR_MESSAGE.INVALID_BIRTH_DATE)
      setShowDobError(true)
      setRegisterDob("")
    } else {
      setShowDobError(false)
      setRegisterDob(e.target.value)
    }
  }

  /**
   * Set gender to the state 
   */
  const checkRegisterGender = (e: React.FocusEvent<HTMLInputElement>) => {
    setRegisterGender(e.target.value)
  }

  /**
   * Validate register email
   * 1) Checks if the field is empty
   * 2) Checks if input matches the regex
   * 
   * Output:
   * 1) If error, show appropriate error message below the input element and reset email state
   * 2) If success, set email to the state 
   */
  const checkRegisterEmail = (e: React.FocusEvent<HTMLInputElement>) => {
    if(e.target.value === "") {
      setEmailError(ERROR_MESSAGE.EMPTY_FIELD)
      setShowEmailError(true)
    } else if(!EMAIL_REGEX.test(e.target.value)) {
      setEmailError(ERROR_MESSAGE.INVALID_EMAIL)
      setShowEmailError(true)
      setRegisterEmail("")
    } else {
      setShowEmailError(false)
      setRegisterEmail(e.target.value)
    }
  }

  /**
   * Validate register password
   * 1) Checks if the field is empty
   * 2) Checks if input is 8 or more characters
   * 
   * Output:
   * 1) If error, show appropriate error message below the input element and reset password state
   * 2) If success, set password to the state 
   */
  const checkRegisterPassword = (e: React.FocusEvent<HTMLInputElement>) => {
    if(e.target.value === "") {
      setPasswordError(ERROR_MESSAGE.EMPTY_FIELD)
      setShowPasswordError(true)
    } else if(e.target.value.length < 7) {
      setPasswordError(ERROR_MESSAGE.INVALID_PASSWORD)
      setShowPasswordError(true)
      setRegisterPassword("")
    } else {
      setShowPasswordError(false)
      setRegisterPassword(e.target.value)
    }
  }

  /**
   * Perform register when
   * 1) Register inputs are available, show error toast otherwise or at failure
   */
  const handleRegister = async (e: React.FormEvent<Element>) => {
    e.preventDefault()

    if(registerEmail !== "" && registerPassword !== "") {
      handleRegisterToast(false)
      let response = await RegisterClient({
        firstName: registerFirstName,
        lastName: registerLastName,
        dob: registerDob,
        gender: registerGender,
        email: registerEmail,
        password: registerPassword
      })
      console.log(response)

      // modify as needed
      if(true) {
        history.push(AppPaths.LOGIN_PATH)
      }
    } else {
      handleRegisterToast(true)
    }
  }

  /**
   * Display or hide toast
   */
  const handleRegisterToast = (show: boolean) => {
    setShowToast(show)
  }

  return (
    <WrapperContainer className="bg-success">
      <BasicCard className="mt-5 mx-auto bg-white col-10 col-md-7 col-lg-6 col-xl-4">
        <BasicForm onSubmit={handleRegister}>
          <BasicContainer className="d-flex flex-column">
            <BasicImage className="mt-5 align-self-center register-logo" src="https://picsum.photos/200" alt="company logo" disableAccessibility={true} />

            <BasicText className="h1 mt-4 py-4 fw-normal fs-3 align-self-center" text={FEATURE_NAMES.REGISTER} />

            <BasicContainer className="d-flex flex-column">
              <BasicContainer className="col-12">
                <BasicLabel text="First Name:" className="mt-3">
                  <TextInput name="firstName" ariaLabel="First Name" onBlur={checkRegisterFirstName} />
                  {
                    showFirstNameError
                      ?
                      <BasicText className="text-danger m-0 fs-6" text={firstNameError} />
                      :
                      null
                  }
                </BasicLabel>

                <BasicLabel text="Last Name:" className="mt-3">
                  <TextInput name="lastName" ariaLabel="Last Name" onBlur={checkRegisterLastName} />
                  {
                    showLastNameError
                      ?
                      <BasicText className="text-danger m-0 fs-6" text={lastNameError} />
                      :
                      null
                  }
                </BasicLabel>

                <BasicLabel text="Birth Date:" className="mt-3">
                  <DateInput name="birthdate" ariaLabel="Birthdate" onBlur={checkRegisterDob} />
                  {
                    showDobError
                      ?
                      <BasicText className="text-danger m-0 fs-6" text={dobError} />
                      :
                      null
                  }
                </BasicLabel>

                <BasicLabel text="Gender:" className="mt-3">
                  <BasicDropDown options={GENDER} name="gender" onChange={checkRegisterGender} />
                </BasicLabel>

                <BasicLabel text="Email:" className="mt-3">
                  <EmailInput name="email" ariaLabel="Email" onBlur={checkRegisterEmail} />
                  {
                    showEmailError
                      ?
                      <BasicText className="text-danger m-0 fs-6" text={emailError} />
                      :
                      null
                  }
                </BasicLabel>

                <BasicLabel text="Password:" className="mt-3">
                  <PasswordInput name="password" ariaLabel="Password" onBlur={checkRegisterPassword} />
                  {
                    showPasswordError
                      ?
                      <BasicText className="text-danger m-0 fs-6" text={passwordError} />
                      :
                      null
                  }
                </BasicLabel>

              </BasicContainer>
            </BasicContainer>

            <SubmitButton className="mt-4 px-4 py-2 w-50 align-self-center" btnText="Submit" />
          </BasicContainer>
        </BasicForm>
      </BasicCard >
      {
        showToast
          ?
          <BasicToast bodyMsg="Register failed" show={showToast} position="tr" onClose={handleRegisterToast} />
          :
          null
      }
    </WrapperContainer >
  )
}

export const RegisterWithRouter = withRouter(Register)