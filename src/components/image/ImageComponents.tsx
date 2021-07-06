import {CoreImageProps} from './CoreImageProps'

const circleStyle = {
  borderRadius: "50%",
}

export const BasicImage: React.FC<CoreImageProps> = ({alt, isCircle, disableAccessibility, ...props}: CoreImageProps) => {
  return (
    <img  {...props} alt={alt} style={isCircle ? circleStyle : {}} role={disableAccessibility ? "presentation" : "img"} />
  )
}