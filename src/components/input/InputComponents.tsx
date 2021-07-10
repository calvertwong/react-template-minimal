import {CoreInputProps} from './CoreInputProps'
import './Input.scss'

export const TextInput: React.FC<CoreInputProps> = ({ariaLabel, ...props}: CoreInputProps) => {
  return (
    <input type="text" className="mt-1 w-100 px-3 py-2 fs-5 input-style" {...props} aria-label={ariaLabel} autoComplete="off" />
  )
}

export const EmailInput: React.FC<CoreInputProps> = ({ariaLabel, ...props}: CoreInputProps) => {
  return (
    <input type="email" className="mt-1 w-100 px-3 py-2 fs-5 input-style" {...props} aria-label={ariaLabel} autoComplete="email" />
  )
}

export const PasswordInput: React.FC<CoreInputProps> = ({ariaLabel, ...props}: CoreInputProps) => {
  return (
    <input type="password" className="mt-1 w-100 px-3 py-2 fs-5 input-style" {...props} aria-label={ariaLabel} autoComplete="current-password" />
  )
}

export const DateInput: React.FC<CoreInputProps> = ({ariaLabel, ...props}: CoreInputProps) => {
  return (
    <input type="date" className="mt-1 w-100 px-3 py-2 fs-5 input-style" {...props} aria-label={ariaLabel} autoComplete="off" />
  )
}
