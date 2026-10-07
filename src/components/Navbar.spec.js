import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('Componente Navbar', () => {

  it('debe mostrar la marca del portafolio', () => {
    render(<Navbar />)

    const marca = screen.getByText('Mi Portafolio')

    expect(marca).toBeTruthy()
    expect(marca.getAttribute('href')).toBe('#inicio')
  })

  it('debe mostrar los cinco enlaces de navegación', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Inicio' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Sobre mí' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Proyectos' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Noticias' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Contacto' })).toBeTruthy()
  })

  it('cada enlace debe apuntar a la sección correcta', () => {
    render(<Navbar />)

    const destinos = {
      'Inicio': '#inicio',
      'Sobre mí': '#sobre-mi',
      'Proyectos': '#proyectos',
      'Noticias': '#noticias',
      'Contacto': '#contacto'
    }

    Object.entries(destinos).forEach(([texto, href]) => {
      const enlace = screen.getByRole('link', { name: texto })
      expect(enlace.getAttribute('href')).toBe(href)
    })
  })

  it('debe tener 6 enlaces en total (marca + 5 secciones)', () => {
    render(<Navbar />)

    expect(screen.getAllByRole('link').length).toBe(6)
  })

  it('el botón del menú debe ser accesible y controlar el colapso', () => {
    render(<Navbar />)

    const boton = screen.getByRole('button', { name: 'Abrir menú' })

    expect(boton.getAttribute('aria-controls')).toBe('menuNavbar')
    expect(boton.getAttribute('aria-expanded')).toBe('false')
    expect(boton.getAttribute('data-bs-target')).toBe('#menuNavbar')
  })

  it('el menú colapsable debe tener el id que el botón referencia', () => {
    const { container } = render(<Navbar />)

    expect(container.querySelector('#menuNavbar')).not.toBeNull()
  })

  it('debe usar las clases de Bootstrap para ser responsivo', () => {
    const { container } = render(<Navbar />)

    const nav = container.querySelector('nav')

    expect(nav.classList.contains('navbar')).toBe(true)
    expect(nav.classList.contains('navbar-expand-lg')).toBe(true)
  })

})