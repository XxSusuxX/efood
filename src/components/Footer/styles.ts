import styled from 'styled-components'
import { Cores } from '../../style'

export const Container = styled.footer`
  background-color: ${Cores.fundoRodape};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 40px;
`
export const Links = styled.ul`
  margin-top: 32.5px;
  margin-bottom: 40px;
  a {
    margin: 0 4px 4px;
  }
`

export const Text = styled.p`
  font-size: 10px;
  margin-top: 37px;
  max-width: 480px;
  width: 100%;
`
