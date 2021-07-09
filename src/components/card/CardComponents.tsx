import {CoreCardProps} from './CoreCardProps'
import './Card.scss'

export const BasicCard: React.FC<CoreCardProps> = ({className, ...props}: CoreCardProps) => {
  return (
    <div className={className + " card-style shadow px-4 py-5"} {...props}></div>
  )
}