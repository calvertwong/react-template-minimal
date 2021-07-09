import {service} from '../ApiService'

interface LoginProps {
  username: string
  password: string
}
export const LoginClient = ({username, password}: LoginProps) => {
  return service.post('/endpoint', {
    username: username,
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