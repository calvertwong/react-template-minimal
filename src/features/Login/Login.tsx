import React from 'react'
import {SubmitButton} from '../../components/button/ButtonComponents'
import {BasicForm} from '../../components/form/FormComponents'
import {EmailInput, PasswordInput} from '../../components/input/InputComponents'
import {Text} from '../../components/text/TextComponents'
import {LOGIN} from '../../constants/AppConstants'
import './Login.scss'

const handleLoginSubmit = (e: React.FormEvent): void => {
  e.preventDefault()
}
export const Login = () => {
  return (
    <div className="mt-5">
      <BasicForm onSubmit={handleLoginSubmit} >
        <div className="d-flex flex-column align-items-center">
          <Text className="h1 fw-normal fs-3" text={LOGIN} />
          <EmailInput className="mt-4 mb-3 w-100 px-3 py-2 fs-5 login-input" name="email" ariaLabel="Email" placeholder="Enter email" />
          <PasswordInput className="mt-4 mb-3 w-100 px-3 py-2 fs-5 login-input" name="password" ariaLabel="Password" placeholder="Enter password" />
          <SubmitButton className="px-4 py-2" btnText="Submit" />
        </div>
      </BasicForm>
    </div >
  )
}