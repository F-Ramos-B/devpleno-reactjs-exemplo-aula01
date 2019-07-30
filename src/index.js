import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //entrada, rodando, terminou
  const [estado, setEstado] = useState("Entrada");
  //palpites
  const [palpite, setPalpite] = useState(150);
  const [numPalpite, setNumPalpite] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  function alterar(tipo) {
    setNumPalpite(numPalpite + 1);
    switch (tipo) {
      default:
        break;
      case "menor":
        setMax(palpite);
        setPalpite(parseInt((palpite - min) / 2) + min);
        break;
      case "maior":
        setMin(palpite);
        setPalpite(parseInt((max - palpite) / 2) + palpite);
        break;
      case "acertou":
        setEstado("Terminou");
        break;
    }
  }

  function iniciar() {
    setEstado("Rodando");
    setMin(0);
    setMax(300);
    setPalpite(150);
    setNumPalpite(0);
  }

  if (estado === "Entrada") {
    return <button onClick={iniciar}>Começar a jogar</button>;
  } else if (estado === "Terminou") {
    return (
      <div>
        <h1>Acabou o jogo! Foram {numPalpite} tentativas.</h1>
        <button onClick={iniciar}>Jogar novamente</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        O seu número é {palpite}?
        <hr />
        <button
          onClick={() => {
            alterar("maior");
          }}
        >
          Maior
        </button>
        <br />
        <button
          onClick={() => {
            alterar("acertou");
          }}
        >
          Acertou
        </button>
        <br />
        <button
          onClick={() => {
            alterar("menor");
          }}
        >
          Menor
        </button>
        <br />
        <button
          onClick={() => {
            setEstado("Entrada");
          }}
        >
          Sair
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
