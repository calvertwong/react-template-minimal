import {CoreButtonProps} from './CoreButtonProps'

export const BasicButton: React.FC<CoreButtonProps> = ({ariaLabel, btnText, ...props}: CoreButtonProps) => {
  return (
    <button type="button" {...props} aria-label={ariaLabel}>{btnText}</button>
  )
}

export const SubmitButton: React.FC<CoreButtonProps> = ({ariaLabel, btnText, ...props}: CoreButtonProps) => {
  return (
    <button type="submit" {...props} aria-label={ariaLabel}>{btnText}</button>
  )
}