import {CoreContainerProps} from './CoreContainerProps'

export const WrapperContainer: React.FC<CoreContainerProps> = ({className, ...props}: CoreContainerProps) => {
  return (
    <div className={className + " overflow-auto h-100 pb-5"} {...props}></div>
  )
}

export const BasicContainer: React.FC<CoreContainerProps> = ({className, ...props}: CoreContainerProps) => {
  return (
    <div className={className} {...props}></div>
  )
}