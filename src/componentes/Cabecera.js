import { Formulario } from "./Formulario";
export const Cabecera = (props) => {
  const { amigos, showFormulario } = props;
  return (
    <header className="container">
      <h1>Gestión de mis {amigos.length} amigos</h1>
      <button type="button" className="boton btn">
        Crear amigo
      </button>
      {showFormulario && <Formulario />}
    </header>
  );
};
