import Navbar from './components/Navbar'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Noticias from './components/Noticias'
import Contacto from './components/Contacto'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="inicio" className="container py-5 text-center">
          <h1 className="display-4 fw-bold text-dark">
            Mi Portafolio Personal
          </h1>

          <p className="lead">
            Bienvenido a mi portafolio desarrollado con React y Bootstrap.
          </p>
        </section>

        <SobreMi />

        <Proyectos />

        <Noticias />

        <Contacto />
      </main>
    </>
  )
}

export default App