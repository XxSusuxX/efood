import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { Cores } from '../../style'

type Props = {
  destaque?: boolean
}

export const Card = styled.div`
  position: relative;
  max-width: 472px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: inset 0 0 0 1px ${Cores.rosa};
  margin-bottom: 48px;
`
export const TagCategoria = styled(TagContainer)`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TagDestaque = styled(TagContainer)<Props>`
  position: absolute;
  top: 16px;
  right: 76px;
  margin-right: 8px;
  display: ${(props) => (props.destaque ? 'block' : 'none')};
`

export const CardContent = styled.div`
  display: flex;
  position: relative;
  margin: 8px;
  padding-bottom: 8px;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 12px;
  margin-bottom: 16px;
`
export const Avaliacao = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-weight: 700;
  font-size: 18px;

  p {
    display: inline-block;
    margin-right: 8px;
  }
  img {
    height: 16px;
  }
`
