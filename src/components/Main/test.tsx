import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      <main
        class="styles__Wrapper-sc-1cs6c8-0 jODcew"
      >
        <img
          alt="Imagem DevNaRoça - Chapéu óculos amarelo e azul com gravata borboleta"
          class="styles__Logo-sc-1cs6c8-1 kjzhTH"
          src="/img/logo.svg"
        />
        <h1
          class="styles__Title-sc-1cs6c8-2 gcXVYJ"
        >
          React Avançado
        </h1>
        <h2
          class="styles__Description-sc-1cs6c8-3 epwofi"
        >
          Typescript, ReactJS, NextJS e Styled Components
        </h2>
        <img
          alt="Um desenvolvedor de frente para telas de código."
          class="styles__Illustration-sc-1cs6c8-4 kYgUhr"
          src="/img/hero-illustration.svg"
        />
      </main>
    `)
  })
  it('should render the colors correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
