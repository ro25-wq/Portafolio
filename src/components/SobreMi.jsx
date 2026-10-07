import fotoPerfil from '../assets/perfil.jpg'

function SobreMi() {
  return (
    <section id="sobre-mi" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={fotoPerfil}
              alt="Foto de perfil de Rosym"
              className="img-fluid rounded-circle shadow"
              style={{
                width: '250px',
                height: '250px',
                objectFit: 'cover'
              }}
            />
          </div>

          <div className="col-md-8">
            <h2 className="fw-bold mb-3 text-dark">Sobre mí</h2>

            <p>
              Mi nombre es Rosym y soy estudiante del área de informática.
              Me interesa el desarrollo web y la creación de aplicaciones
              utilizando tecnologías modernas.
            </p>

            <p>
              Actualmente estoy desarrollando proyectos con React,
              JavaScript, HTML, CSS y Bootstrap, buscando mejorar
              constantemente mis habilidades como desarrolladora.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SobreMi