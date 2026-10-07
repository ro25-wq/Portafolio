import noticiasData from '../data/noticias.json'

function Noticias({ noticias = noticiasData }) {
  return (
    <section id="noticias" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Noticias
        </h2>

        <div className="row justify-content-center">
          {noticias.map((noticia) => (
            <div
              className="col-md-6 mb-4"
              key={noticia.id}
            >
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">
                    {noticia.titulo}
                  </h4>

                  <p className="text-muted">
                    {noticia.fecha}
                  </p>

                  <p className="card-text">
                    {noticia.contenido}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Noticias
