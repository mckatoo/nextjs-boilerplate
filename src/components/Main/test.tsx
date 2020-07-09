import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /DevNaRoça/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: #06092b;
        color: #fff;
        width: 100%;
        height: 100%;
        padding: 3rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        text-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .c1 {
        width: 25rem;
        margin-bottom: 2rem;
      }

      .c2 {
        font-size: 2.5rem;
      }

      .c3 {
        font-size: 2rem;
        font-weight: 400;
      }

      .c4 {
        margin-top: 3rem;
        width: min(30rem,100%);
      }

      <main
        class="c0"
      >
        <img
          alt="Imagem DevNaRoça - Chapéu óculos amarelo e azul com gravata borboleta"
          class="c1"
          src="/img/logo.svg"
        />
        <h1
          class="c2"
        >
          DevNaRoça
        </h1>
        <h2
          class="c3"
        >
          Desenvolvimento Web, Mobile e Desktop
        </h2>
        <img
          alt="Um desenvolvedor de frente para telas de código."
          class="c4"
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
