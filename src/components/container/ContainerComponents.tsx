import {CoreContainerProps} from './CoreContainerProps'

export const BasicContainer: React.FC<CoreContainerProps> = ({className, ...props}: CoreContainerProps) => {
  return (
    <div className={className + " overflow-auto h-100 pb-5"} {...props}></div>
  )
}