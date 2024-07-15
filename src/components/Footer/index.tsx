import { LogoImage } from '../Header/styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/Instagram.png'
import facebook from '../../assets/images/Facebook.png'
import twitter from '../../assets/images/Twitter.png'
import { Container, Links, Text } from './styles'

const Footer = () => (
  <Container>
    <LogoImage src={logo} alt="EFOOD" />

    <Links>
      <a href="/">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="/">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="/">
        <img src={twitter} alt="twitter" />
      </a>
    </Links>
    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </Container>
)

export default Footer
