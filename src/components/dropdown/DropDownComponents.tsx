import React from 'react'
import {CoreDropDownProps} from './CoreDropDownProps'
import './DropDown.scss'

export const BasicDropDown: React.FC<CoreDropDownProps> = ({className, onChange, options, ...props}: CoreDropDownProps) => {
  return (
    <select className={className + " custom-select w-100 px-3 py-2 fs-5 dropdown-style"} {...props} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)} defaultValue={options[0]} >
      {
        options.map((item, index) => {
          return <option key={index} value={item}>{item}</option>
        })
      }
    </select>
  )
}