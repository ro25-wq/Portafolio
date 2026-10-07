import { render, screen, fireEvent } from '@testing-library/react'
import Contacto from './Contacto'

describe('Componente Contacto', () => {

  it('debe mostrar el título Contacto', () => {
    render(<Contacto />)

    const titulo = screen.getByText('Contacto')

    expect(titulo).toBeTruthy()
  })

  it('debe mostrar los campos del formulario', () => {
    render(<Contacto />)

    expect(screen.getByLabelText('Nombre')).toBeTruthy()
    expect(screen.getByLabelText('Correo electrónico')).toBeTruthy()
    expect(screen.getByLabelText('Mensaje')).toBeTruthy()
  })

  it('no debe mostrar el mensaje de éxito al cargar', () => {
    render(<Contacto />)

    expect(
      screen.queryByText('Mensaje enviado correctamente.')
    ).toBeNull()
  })

  it('debe actualizar los campos cuando el usuario escribe', () => {
    render(<Contacto />)

    const nombre = screen.getByLabelText('Nombre')
    fireEvent.change(nombre, { target: { value: 'Rosy' } })

    expect(nombre.value).toBe('Rosy')
  })

  it('debe mostrar mensaje al enviar formulario', async () => {
    render(<Contacto />)

    fireEvent.change(screen.getByLabelText('Nombre'), {
      target: { value: 'Rosy' }
    })
    fireEvent.change(screen.getByLabelText('Correo electrónico'), {
      target: { value: 'rosy@correo.com' }
    })
    fireEvent.change(screen.getByLabelText('Mensaje'), {
      target: { value: 'Hola, me gustaría contactarte.' }
    })

    fireEvent.click(screen.getByText('Enviar mensaje'))

    expect(
      await screen.findByText('Mensaje enviado correctamente.')
    ).toBeTruthy()
  })

})