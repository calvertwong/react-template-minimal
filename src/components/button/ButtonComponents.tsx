import {CoreButtonProps} from './CoreButtonProps'

export const BasicButton: React.FC<CoreButtonProps> = ({btnText, ...props}: CoreButtonProps) => {
  return (
    <button type="button" {...props}>{btnText}</button>
  )
}

export const SubmitButton: React.FC<CoreButtonProps> = ({btnText, ...props}: CoreButtonProps) => {
  return (
    <button type="submit" {...props}>{btnText}</button>
  )
}