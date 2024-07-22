import { ButtonContainer, ButtonContainerLink } from './styles'

type ButtonProps = {
  kind: 'button' | 'link'
  displayMode?: 'fullWidth' | 'inlineBlock'
  themeMode: 'primary' | 'second'
  placeholder?: string
  to?: string
  type?: 'button' | 'reset' | 'submit'
  disabled?: boolean
  onClick?: () => void
  children?: string
  title?: string
}

const Button = ({
  kind,
  placeholder,
  displayMode = 'fullWidth',
  themeMode = 'primary',
  to,
  type = 'button',
  disabled = false,
  onClick,
  children,
  title
}: ButtonProps) => {
  if (kind === 'link') {
    return (
      <ButtonContainerLink
        displayMode={displayMode}
        themeMode={themeMode}
        to={to as string}
        title={title}
      >
        {children || placeholder}
      </ButtonContainerLink>
    )
  }

  return (
    <ButtonContainer
      onClick={onClick}
      displayMode={displayMode}
      themeMode={themeMode}
      type={type}
      disabled={disabled}
      title={title}
    >
      {children || placeholder}
    </ButtonContainer>
  )
}

export default Button
