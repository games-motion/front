import * as Styled from './styles'

interface InputDataProps {
  label?: string
  type?: 'email' | 'password' | 'text'
}

export type InputProps = JSX.IntrinsicElements['input'] & InputDataProps

export function Input({ label = 'login', placeholder, type = 'text' }: InputProps) {
  return (
    <Styled.Container>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </Styled.Container>
  )
}