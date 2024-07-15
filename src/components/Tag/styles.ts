import styled from 'styled-components'
import { Cores } from '../../style'

type Props = {
  destaque?: boolean
}

export const TagContainer = styled.div<Props>`
  display: inline-block;
  background-color: ${Cores.rosa};
  color: ${Cores.branco};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 4px;
`
