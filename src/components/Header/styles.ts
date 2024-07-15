import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'

export const LogoImage = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
`

export const SubTitle = styled.h2`
  width: 539px;
  font-weight: 900;
  font-size: 36px;
  margin-top: 150px;
  text-align-last: center;
`

export const HeaderDiv = styled.header`
  background-image: url(${fundo});
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 384px;
  margin-bottom: 80px;
`
