function ProyectoCard({ imagen, titulo, descripcion, tecnologias, enlace }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={imagen}
          className="card-img-top"
          alt={`Imagen del proyecto ${titulo}`}
          style={{ height: '220px', objectFit: 'cover' }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">
            {titulo}
          </h5>

          <p className="card-text">
            {descripcion}
          </p>

          <p>
            <strong>Tecnologías:</strong> {tecnologias}
          </p>

          <a
            href={enlace}
            className="btn btn-dark mt-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProyectoCard