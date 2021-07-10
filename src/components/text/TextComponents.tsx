import {CoreTextProps} from './CoreTextProps'

export const BasicText: React.FC<CoreTextProps> = ({text, ...props}: CoreTextProps) => {
  return (
    <p {...props}>{text}</p>
  )
}

