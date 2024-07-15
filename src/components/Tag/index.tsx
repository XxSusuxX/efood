import { TagContainer } from './styles'

export type Props = {
  children: string
  destaque?: boolean
}

const Tag = ({ children, destaque }: Props) => (
  <TagContainer destaque={destaque}>{children}</TagContainer>
)

export default Tag
