function App() {
  return (
    <>
      <header className="container">
        <h1>Gestión de mis 6 amigos</h1>
        <button type="button" className="boton btn">
          Crear amigo
        </button>
        <form className="row">
          <div className="form-group col">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" className="form-control" id="nombre" />
          </div>
          <div className="form-group col">
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" class="form-control" id="apellido" />
          </div>
          <div className="form-group col">
            <label htmlFor="valoracion">Valoracion:</label>
            <select className="form-control col" id="valoracion">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="form-group col">
            <button type="submit" className="boton btn">
              Crear
            </button>
            <button type="button" className="boton btn">
              Cancelar
            </button>
          </div>
        </form>
      </header>
      <main className="contenedor-principal container">
        <ul className="row list-unstyled">
          <li className="amigo col-12 col-sm-4">
            <i></i>
            <i></i>
            <p>Nombre: Juan</p>
            <p>Apellido: González</p>
            <p>
              Valoración: <i></i>
            </p>
          </li>
          <li className="amigo col-12 col-sm-4">
            <i></i>
            <i></i>
            <p>Nombre: Juan</p>
            <p>Apellido: González</p>
            <p>
              Valoración: <i></i>
            </p>
          </li>
          <li className="amigo col-12 col-sm-4">
            <p>Nombre: Juan</p>
            <p>Apellido: González</p>
            <p>
              Valoración: <i></i>
            </p>
          </li>
          <li className="amigo col-12 col-sm-4">
            <p>Nombre: Juan</p>
            <p>Apellido: González</p>
            <p>
              Valoración: <i></i>
            </p>
          </li>
          <li className="amigo col-12 col-sm-4">
            <i></i>
            <i></i>
            <p>Nombre: Juan</p>
            <p>Apellido: González</p>
            <p>
              Valoración: <i></i>
            </p>
          </li>
          <li className="amigo col-12 col-sm-4">
            <i></i>
            <i></i>
            <p>Nombre: Juan</p>
            <p>Apellido: González</p>
            <p>
              Valoración: <i></i>
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;
