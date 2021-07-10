import {CoreLabelProps} from './CoreLabelProps'

export const BasicLabel: React.FC<CoreLabelProps> = ({className, children, text}: CoreLabelProps) => {
  return (
    <label className={className + " w-100 fs-5"}>{text}<br />{children}</label>
  )
}