import {ACCESSIBILITY_ROLE} from '../../constants/AppConstants'
import {CoreImageProps} from './CoreImageProps'

export const BasicImage: React.FC<CoreImageProps> = ({alt, className, isCircle, disableAccessibility, ...props}: CoreImageProps) => {
  return (
    <img {...props} className={className + (isCircle ? " rounded-circle" : '')} alt={alt} role={disableAccessibility ? ACCESSIBILITY_ROLE.PRESENTATION : ACCESSIBILITY_ROLE.IMG} />
  )
}