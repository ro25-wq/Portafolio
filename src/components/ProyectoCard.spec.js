import { render, screen } from '@testing-library/react'
import ProyectoCard from './ProyectoCard'

describe('Componente ProyectoCard', () => {

  const props = {
    imagen: 'https://placehold.co/600x400?text=Test',
    titulo: 'Proyecto de Prueba',
    descripcion: 'Descripción de prueba del proyecto.',
    tecnologias: 'Angular, TypeScript',
    enlace: 'https://github.com/usuario/repo'
  }

  it('debe mostrar el título del proyecto', () => {
    render(<ProyectoCard {...props} />)

    expect(
      screen.getByRole('heading', { name: 'Proyecto de Prueba' })
    ).toBeTruthy()
  })

  it('debe mostrar la descripción y las tecnologías recibidas por props', () => {
    render(<ProyectoCard {...props} />)

    expect(screen.getByText('Descripción de prueba del proyecto.')).toBeTruthy()
    expect(screen.getByText(/Angular, TypeScript/)).toBeTruthy()
    expect(screen.getByText('Tecnologías:')).toBeTruthy()
  })

  it('debe mostrar la imagen con src y alt descriptivo', () => {
    render(<ProyectoCard {...props} />)

    const img = screen.getByAltText('Imagen del proyecto Proyecto de Prueba')

    expect(img.getAttribute('src')).toBe(props.imagen)
  })

  it('debe tener un enlace que abre en una pestaña nueva de forma segura', () => {
    render(<ProyectoCard {...props} />)

    const enlace = screen.getByRole('link', { name: 'Ver proyecto' })

    expect(enlace.getAttribute('href')).toBe(props.enlace)
    expect(enlace.getAttribute('target')).toBe('_blank')
    expect(enlace.getAttribute('rel')).toContain('noopener')
  })

  it('debe ser reutilizable con distintas props', () => {
    const { unmount } = render(<ProyectoCard {...props} />)
    expect(screen.getByText('Proyecto de Prueba')).toBeTruthy()
    unmount()

    render(
      <ProyectoCard
        {...props}
        titulo="Otro Proyecto"
        tecnologias="Vue, Vite"
      />
    )

    expect(screen.getByText('Otro Proyecto')).toBeTruthy()
    expect(screen.getByText(/Vue, Vite/)).toBeTruthy()
    expect(screen.queryByText('Proyecto de Prueba')).toBeNull()
  })

})