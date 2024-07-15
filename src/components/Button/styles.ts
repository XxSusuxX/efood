import styled from 'styled-components'
import { Cores } from '../../style'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${Cores.rosa};
  color: ${Cores.branco};
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  border: unset;
  padding: 4px 6px;
  text-decoration: none;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  background-color: ${Cores.rosa};
  color: ${Cores.branco};
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  border: unset;
  padding: 4px 6px;
`
