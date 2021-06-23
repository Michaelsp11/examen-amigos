import { Formulario } from "./Formulario";
export const Cabecera = (props) => {
  const {
    amigos,
    amigo,
    showFormulario,
    setShowFormulario,
    crearAmigo,
    editarAmigo,
  } = props;
  const mostrarFormulario = () => setShowFormulario(true);
  return (
    <header className="container">
      <h1>Gestión de mis {amigos.length} amigos</h1>
      <button type="button" className="boton btn" onClick={mostrarFormulario}>
        Crear amigo
      </button>
      {showFormulario && (
        <Formulario
          amigo={amigo}
          setShowFormulario={setShowFormulario}
          crearAmigo={crearAmigo}
          editarAmigo={editarAmigo}
        />
      )}
    </header>
  );
};
