import { render, screen } from '@testing-library/react'
import Noticias from './Noticias'
import noticiasData from '../data/noticias.json'

describe('Componente Noticias', () => {

  it('debe mostrar el título de la sección', () => {
    render(<Noticias />)

    expect(
      screen.getByRole('heading', { name: 'Noticias' })
    ).toBeTruthy()
  })

  it('debe cargar al menos dos noticias desde el JSON', () => {
    expect(noticiasData.length).toBeGreaterThanOrEqual(2)
  })

  it('debe renderizar una tarjeta por cada noticia del JSON', () => {
    render(<Noticias />)

    const titulos = screen.getAllByRole('heading', { level: 4 })

    expect(titulos.length).toBe(noticiasData.length)
  })

  it('debe mostrar título, fecha y contenido de cada noticia', () => {
    render(<Noticias />)

    noticiasData.forEach((noticia) => {
      expect(screen.getByText(noticia.titulo)).toBeTruthy()
      expect(screen.getByText(noticia.fecha)).toBeTruthy()
      expect(screen.getByText(noticia.contenido)).toBeTruthy()
    })
  })

  it('cada noticia del JSON debe tener los campos requeridos', () => {
    noticiasData.forEach((noticia) => {
      expect(noticia.titulo).toBeTruthy()
      expect(noticia.fecha).toBeTruthy()
      expect(noticia.contenido).toBeTruthy()
    })
  })

  it('debe renderizar noticias simuladas recibidas por props (mock)', () => {
    const noticiasMock = [
      { id: 1, titulo: 'Noticia Mock A', fecha: '01-01-2026', contenido: 'Contenido simulado A' },
      { id: 2, titulo: 'Noticia Mock B', fecha: '02-01-2026', contenido: 'Contenido simulado B' },
      { id: 3, titulo: 'Noticia Mock C', fecha: '03-01-2026', contenido: 'Contenido simulado C' }
    ]

    render(<Noticias noticias={noticiasMock} />)

    expect(screen.getByText('Noticia Mock A')).toBeTruthy()
    expect(screen.getByText('Contenido simulado B')).toBeTruthy()
    expect(screen.getAllByRole('heading', { level: 4 }).length).toBe(3)
  })

  it('no debe mostrar tarjetas si la lista de noticias está vacía', () => {
    render(<Noticias noticias={[]} />)

    expect(screen.queryAllByRole('heading', { level: 4 }).length).toBe(0)
    expect(screen.getByRole('heading', { name: 'Noticias' })).toBeTruthy()
  })

})