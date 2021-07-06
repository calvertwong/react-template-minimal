import React from 'react';

export interface CoreButtonProps {
  autoFocus?: boolean
  btnText: string
  className?: string
  disabled?: boolean
  form?: string
  formTarget?: string
  value?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}