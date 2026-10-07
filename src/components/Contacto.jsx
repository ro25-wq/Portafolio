import { useState } from 'react'

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  })

  const [mensajeEnviado, setMensajeEnviado] = useState(false)

  const manejarCambio = (evento) => {
    const { name, value } = evento.target

    setFormulario({
      ...formulario,
      [name]: value
    })
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    setMensajeEnviado(true)

    setFormulario({
      nombre: '',
      correo: '',
      mensaje: ''
    })
  }

  return (
    <section id="contacto" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Contacto
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">

            {mensajeEnviado && (
              <div className="alert alert-success">
                Mensaje enviado correctamente.
              </div>
            )}

            <form onSubmit={manejarEnvio}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="correo" className="form-label">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  className="form-control"
                  id="correo"
                  name="correo"
                  value={formulario.correo}
                  onChange={manejarCambio}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>

                <textarea
                  className="form-control"
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-dark w-100"
              >
                Enviar mensaje
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto