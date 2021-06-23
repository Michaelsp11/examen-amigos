import { FaTimes, FaPencilAlt, FaStar } from "react-icons/fa";
export const ListaAmigos = (props) => {
  const { amigos, setAmigo, setShowFormulario, borrarAmigo } = props;
  const editarAmigo = (amigo) => {
    setAmigo(amigo);
    setShowFormulario(true);
  };
  return (
    <ul className="row list-unstyled">
      {amigos.map((amigo) => {
        const { id, nombre, apellido, valoracion } = amigo;
        const valoraciones = [];
        if (valoracion === 3) {
          valoraciones.push(1, 2, 3);
        } else if (valoracion === 2) {
          valoraciones.push(1, 2);
        } else if (valoracion === 1) {
          valoraciones.push(1);
        }
        return (
          <li key={id} className="amigo col-12 col-sm-4">
            <div className="text-right">
              <FaPencilAlt onClick={() => editarAmigo(amigo)} />
              <FaTimes onClick={() => borrarAmigo(id)} />
            </div>
            <div className="info">
              <p>{`Nombre: ${nombre}`}</p>
              <p>{`Apellido: ${apellido}`}</p>
              <p>
                Valoración:
                {valoraciones.map((valoracion, i) => (
                  <FaStar key={i} />
                ))}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
