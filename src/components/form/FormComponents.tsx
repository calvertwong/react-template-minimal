import {CoreFormProps} from './CoreFormProps'

export const BasicForm: React.FC<CoreFormProps> = (props: CoreFormProps) => {
  return (
    <form {...props} noValidate></form>
  )
}