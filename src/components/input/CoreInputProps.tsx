
export interface CoreInputProps {
  ariaLabel: string
  className?: string;
  id?: string
  name: string
  pattern?: string
  placeholder?: string
  title?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}