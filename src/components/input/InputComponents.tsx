import {CoreInputProps} from './CoreInputProps'

export const TextInput: React.FC<CoreInputProps> = ({ariaLabel, ...props}: CoreInputProps) => {
  return (
    <input type="text" {...props} aria-label={ariaLabel} autoComplete="off" />
  )
}

export const EmailInput: React.FC<CoreInputProps> = ({ariaLabel, ...props}: CoreInputProps) => {
  return (
    <input type="email" {...props} aria-label={ariaLabel} autoComplete="email" />
  )
}

export const PasswordInput: React.FC<CoreInputProps> = ({ariaLabel, ...props}: CoreInputProps) => {
  return (
    <input type="password" {...props} aria-label={ariaLabel} autoComplete="current-password" />
  )
}

export const DateInput: React.FC<CoreInputProps> = ({ariaLabel, ...props}: CoreInputProps) => {
  return (
    <input type="date" {...props} aria-label={ariaLabel} autoComplete="off" />
  )
}
