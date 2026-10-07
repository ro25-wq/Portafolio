import { render, screen } from '@testing-library/react'
import SobreMi from './SobreMi'

describe('Componente SobreMi', () => {

  it('debe mostrar el título de la sección', () => {
    render(<SobreMi />)

    expect(
      screen.getByRole('heading', { name: 'Sobre mí' })
    ).toBeTruthy()
  })

  it('debe mostrar la biografía', () => {
    render(<SobreMi />)

    expect(screen.getByText(/Mi nombre es Rosym/)).toBeTruthy()
    expect(
      screen.getByText(/estoy desarrollando proyectos con React/)
    ).toBeTruthy()
  })

  it('debe mostrar la foto de perfil con texto alternativo', () => {
    render(<SobreMi />)

    const foto = screen.getByAltText('Foto de perfil de Rosym')

    expect(foto).toBeTruthy()
    expect(foto.getAttribute('src')).toBeTruthy()
  })

  it('debe tener el id sobre-mi para la navegación', () => {
    const { container } = render(<SobreMi />)

    expect(container.querySelector('#sobre-mi')).not.toBeNull()
  })

})