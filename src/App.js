import { useCallback, useEffect, useState } from "react";
import { Cabecera } from "./componentes/Cabecera";
import { ListaAmigos } from "./componentes/ListaAmigos";
function App() {
  const apiAmigos = "http://localhost:3001/amigos/";
  const [amigos, setAmigos] = useState([]);
  const [showFormulario, setShowFormulario] = useState(false);
  const getAmigos = useCallback(async () => {
    const resp = await fetch(apiAmigos);
    const amigosAPI = await resp.json();
    setAmigos(amigosAPI);
  }, []);
  useEffect(() => {
    getAmigos();
  }, [getAmigos]);
  return (
    <>
      <Cabecera amigos={amigos} showFormulario={showFormulario} />
      <main className="contenedor-principal container">
        <ListaAmigos amigos={amigos} />
      </main>
    </>
  );
}

export default App;
