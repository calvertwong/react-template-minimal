export interface CoreAlertProps {
  bodyMsg: string
  className?: string
  onClose?: any
  primaryBtn?: string
  secondaryBtn?: string
  show: boolean
}

export interface BasicAlertProps extends CoreAlertProps {
  titleMsg: string
}

export interface ToastProps extends CoreAlertProps {
  // top-left, top-center, top-right
  // bottom-left, bottom-center, bottom-right
  position: 'tl' | 'tc' | 'tr' | 'bl' | 'bc' | 'br' | 'center'
  titleMsg?: string
}