import { render, screen } from '@testing-library/react'
import App from './App'

describe('Componente App', () => {

  it('debe mostrar el título principal y el mensaje de bienvenida', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Mi Portafolio Personal' })
    ).toBeTruthy()
    expect(
      screen.getByText(/Bienvenido a mi portafolio desarrollado con React/)
    ).toBeTruthy()
  })

  it('debe tener la sección de inicio con el id que usa el Navbar', () => {
    const { container } = render(<App />)

    expect(container.querySelector('#inicio')).not.toBeNull()
  })

  it('debe renderizar todas las secciones del portafolio', () => {
    const { container } = render(<App />)

    expect(container.querySelector('nav')).not.toBeNull()
    expect(container.querySelector('#sobre-mi')).not.toBeNull()
    expect(container.querySelector('#proyectos')).not.toBeNull()
    expect(container.querySelector('#noticias')).not.toBeNull()
    expect(container.querySelector('#contacto')).not.toBeNull()
  })

  it('cada enlace del Navbar debe apuntar a una sección que existe', () => {
    const { container } = render(<App />)

    const enlaces = container.querySelectorAll('nav a[href^="#"]')

    expect(enlaces.length).toBe(6)
    enlaces.forEach((enlace) => {
      const destino = enlace.getAttribute('href')
      expect(container.querySelector(destino)).not.toBeNull()
    })
  })

  it('debe mostrar el contenido principal dentro de un elemento main', () => {
    const { container } = render(<App />)

    expect(container.querySelector('main')).not.toBeNull()
  })

})
