import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { Container, GlobalCss } from './style'
import ProductsList from './components/ProductsList'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <ProductsList />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
      <Footer />
    </>
  )
}

export default App
