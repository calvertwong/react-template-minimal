import {service} from '../ApiService'
import {RegisterProps} from './RegisterProps'

export const RegisterClient = ({firstName, lastName, dob, gender, email, password}: RegisterProps) => {
  return service.post('/endpoint', {
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    gender: gender,
    email: email,
    password: password
  })
    .then((response: any) => {
      return response
    })
    .catch((err: any) => {
      return err
    })
}