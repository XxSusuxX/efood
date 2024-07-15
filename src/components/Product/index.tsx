import Button from '../Button'
import {
  Card,
  Titulo,
  Descricao,
  Avaliacao,
  CardContent,
  TagDestaque,
  TagCategoria
} from './styles'
import estrela from '../../assets/images/estrela.png'

export type Props = {
  title: string
  category: string
  description: string
  image: string
  review: number
  destaque?: boolean
}

const Product = ({
  title,
  category,
  description,
  image,
  review,
  destaque
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <TagDestaque destaque={destaque}>Destaque da semana</TagDestaque>
    <TagCategoria>{category}</TagCategoria>
    <CardContent>
      <Titulo>{title}</Titulo>
      <Avaliacao>
        <p>{review}</p>
        <img src={estrela} alt="estrela" />
      </Avaliacao>
      <Descricao>{description}</Descricao>
      <Button
        type="button"
        to="/Product"
        title="Clique aqui para saber mais sobre o produto"
      >
        Saiba mais
      </Button>
    </CardContent>
  </Card>
)

export default Product
