import * as Styles from './styles'

const Main = ({
  title = 'DevNaRoça',
  description = 'Desenvolvimento Web, Mobile e Desktop'
}) => (
  <Styles.Wrapper>
    <Styles.Logo
      src="/img/logo.svg"
      alt="Imagem DevNaRoça - Chapéu óculos amarelo e azul com gravata borboleta"
    />
    <Styles.Title>{title}</Styles.Title>
    <Styles.Description>{description}</Styles.Description>
    <Styles.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para telas de código."
    />
  </Styles.Wrapper>
)

export default Main
