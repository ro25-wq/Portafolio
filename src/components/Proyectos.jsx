import ProyectoCard from './ProyectoCard'
import proyecto1 from '../assets/proyecto1.svg'
import proyecto2 from '../assets/proyecto2.svg'
import proyecto3 from '../assets/proyecto3.svg'

function Proyectos() {
  const proyectos = [
    {
      id: 1,
      imagen: proyecto1,
      titulo: 'Sitio Web Personal',
      descripcion:
        'Sitio web responsivo creado para presentar información personal y profesional.',
      tecnologias: 'HTML, CSS, JavaScript',
      enlace: 'https://github.com/'
    },
    {
      id: 2,
      imagen: proyecto2,
      titulo: 'Aplicación React',
      descripcion:
        'Aplicación desarrollada utilizando componentes reutilizables y diseño responsivo.',
      tecnologias: 'React, JavaScript, Bootstrap',
      enlace: 'https://github.com/'
    },
    {
      id: 3,
      imagen: proyecto3,
      titulo: 'Sistema de Gestión',
      descripcion:
        'Proyecto web orientado a la organización y gestión de información.',
      tecnologias: 'React, Bootstrap, JSON',
      enlace: 'https://github.com/'
    }
  ]

  return (
    <section id="proyectos" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Mis Proyectos
        </h2>

        <div className="row">
          {proyectos.map((proyecto) => (
            <ProyectoCard
              key={proyecto.id}
              imagen={proyecto.imagen}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              tecnologias={proyecto.tecnologias}
              enlace={proyecto.enlace}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos