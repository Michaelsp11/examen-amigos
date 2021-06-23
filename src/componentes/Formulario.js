export const Formulario = (props) => {
  return (
    <form className="row">
      <div className="form-group col">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" className="form-control" id="nombre" />
      </div>
      <div className="form-group col">
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" className="form-control" id="apellido" />
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
  );
};
