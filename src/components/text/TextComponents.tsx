import {CoreTextProps} from './CoreTextProps'

export const Text: React.FC<CoreTextProps> = ({text, ...props}: CoreTextProps) => {
  return (
    <p {...props}>{text}</p>
  )
}
