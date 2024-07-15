import { HeaderDiv, LogoImage, SubTitle } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderDiv>
    <h1>
      <LogoImage src={logo} alt="EFOOD" />
    </h1>
    <SubTitle>Viva experiências gastronômicas no conforto da sua casa</SubTitle>
  </HeaderDiv>
)

export default Header
