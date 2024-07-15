import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  rosa: '#E66767',
  fundoRodape: '#FFEBD9',
  fundo: '#FFF8F2',
  branco: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: ${Cores.fundo};
    color: ${Cores.rosa};
    font-size: 14px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
