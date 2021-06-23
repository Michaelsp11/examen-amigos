import { useFormulario } from "../hooks/useFormulario";

export const Formulario = (props) => {
  const { amigo, setShowFormulario, crearAmigo, editarAmigo } = props;
  const cerrarFormulario = () => setShowFormulario(false);
  const { datos, formularioInvalido, setDato, resetFormulario } =
    useFormulario(amigo);
  const enviarAmigo = (e) => {
    e.preventDefault();
    if (amigo.id) {
      editarAmigo({ ...datos, valoracion: +datos.valoracion });
    } else {
      crearAmigo({ ...datos, valoracion: +datos.valoracion });
      resetFormulario();
    }
  };
  return (
    <form className="row" onSubmit={enviarAmigo}>
      <div className="form-group col">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          value={datos.nombre}
          onChange={setDato}
        />
      </div>
      <div className="form-group col">
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          value={datos.apellido}
          onChange={setDato}
        />
      </div>
      <div className="form-group col">
        <label htmlFor="valoracion">Valoracion:</label>
        <select
          className="form-control col"
          id="valoracion"
          value={datos.valoracion}
          onChange={setDato}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="form-group col">
        <button
          type="submit"
          className="boton btn"
          disabled={formularioInvalido}
        >
          {amigo.id ? "Modificar" : "Crear"}
        </button>
        <button type="button" className="boton btn" onClick={cerrarFormulario}>
          Cancelar
        </button>
      </div>
    </form>
  );
};
