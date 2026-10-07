import { render, screen } from '@testing-library/react'
import Proyectos from './Proyectos'

describe('Componente Proyectos', () => {

  it('debe mostrar el título de la sección', () => {
    render(<Proyectos />)

    expect(screen.getByText('Mis Proyectos')).toBeTruthy()
  })

  it('debe mostrar los tres proyectos', () => {
    render(<Proyectos />)

    expect(screen.getByText('Sitio Web Personal')).toBeTruthy()
    expect(screen.getByText('Aplicación React')).toBeTruthy()
    expect(screen.getByText('Sistema de Gestión')).toBeTruthy()
  })

  it('debe mostrar las descripciones de los proyectos', () => {
    render(<Proyectos />)

    expect(
      screen.getByText(/sitio web responsivo creado para presentar/i)
    ).toBeTruthy()
    expect(
      screen.getByText(/aplicación desarrollada utilizando componentes/i)
    ).toBeTruthy()
    expect(
      screen.getByText(/proyecto web orientado a la organización/i)
    ).toBeTruthy()
  })

  it('debe mostrar las tecnologías utilizadas', () => {
    render(<Proyectos />)

    expect(screen.getByText(/HTML, CSS, JavaScript/)).toBeTruthy()
    expect(screen.getByText(/React, JavaScript, Bootstrap/)).toBeTruthy()
    expect(screen.getByText(/React, Bootstrap, JSON/)).toBeTruthy()
  })

  it('debe renderizar una imagen por cada proyecto', () => {
    render(<Proyectos />)

    const imagenes = screen.getAllByRole('img')

    expect(imagenes.length).toBe(3)
  })

  it('debe renderizar un enlace por cada proyecto', () => {
    render(<Proyectos />)

    const enlaces = screen.getAllByRole('link')

    expect(enlaces.length).toBe(3)
    enlaces.forEach((enlace) => {
      expect(enlace.getAttribute('href')).toBe('https://github.com/')
    })
  })

})