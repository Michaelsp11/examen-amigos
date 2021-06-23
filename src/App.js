import { useCallback, useEffect, useState } from "react";
import { Cabecera } from "./componentes/Cabecera";
import { ListaAmigos } from "./componentes/ListaAmigos";
function App() {
  const apiAmigos = "http://localhost:3001/amigos/";
  const [amigos, setAmigos] = useState([]);
  const [amigo, setAmigo] = useState({
    nombre: "",
    apellido: "",
    valoracion: 1,
  });
  const [showFormulario, setShowFormulario] = useState(false);
  const getAmigos = useCallback(async () => {
    const resp = await fetch(apiAmigos);
    const amigosAPI = await resp.json();
    setAmigos(amigosAPI);
  }, []);
  useEffect(() => {
    getAmigos();
  }, [getAmigos]);
  const crearAmigo = async (amigo) => {
    const resp = await fetch(apiAmigos, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(amigo),
    });
    if (resp.ok) {
      const nuevoAmigo = await resp.json();
      setAmigos([...amigos, nuevoAmigo]);
    }
  };
  const editarAmigo = async (amigoEditado) => {
    fetch(apiAmigos + amigoEditado.id, {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(amigoEditado),
    });
    setAmigos(
      amigos.map((amigo) =>
        amigo.id === amigoEditado.id ? amigoEditado : amigo
      )
    );
  };
  const borrarAmigo = (id) => {
    fetch(apiAmigos + id, {
      method: "DELETE",
    });
    setAmigos(amigos.filter((amigo) => amigo.id !== id));
  };
  return (
    <>
      <Cabecera
        amigos={amigos}
        amigo={amigo}
        showFormulario={showFormulario}
        setShowFormulario={setShowFormulario}
        crearAmigo={crearAmigo}
        editarAmigo={editarAmigo}
      />
      <main className="contenedor-principal container">
        <ListaAmigos
          amigos={amigos}
          setAmigo={setAmigo}
          setShowFormulario={setShowFormulario}
          borrarAmigo={borrarAmigo}
        />
      </main>
    </>
  );
}

export default App;
