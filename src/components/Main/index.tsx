import * as Styles from './styles'

const Main = () => (
  <Styles.Wrapper>
    <Styles.Logo
      src="/img/logo.svg"
      alt="Imagem DevNaRoça - Chapéu óculos amarelo e azul com gravata borboleta"
    />
    <Styles.Title>React Avançado</Styles.Title>
    <Styles.Description>
      Typescript, ReactJS, NextJS e Styled Components
    </Styles.Description>
    <Styles.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para telas de código."
    />
  </Styles.Wrapper>
)

export default Main
