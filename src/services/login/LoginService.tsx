import {service} from '../ApiService'
import {LoginProps} from './LoginProps'

export const LoginClient = ({email, password}: LoginProps) => {
  return service.post('/endpoint', {
    email: email,
    password: password
  })
    .then((response: any) => {
      // access token
      return response
    })
    .catch((err: any) => {
      return err
    })
}