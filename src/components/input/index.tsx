import * as Styled from './styles'

interface InputDataProps {
  label: string
  type?: 'email' | 'password' | 'text'
}

type InputProps = JSX.IntrinsicElements['input'] & InputDataProps

export default function Input({ label = 'login', placeholder, type = 'text' }: InputProps) {
  return (
    <Styled.Container>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </Styled.Container>
  )
}
