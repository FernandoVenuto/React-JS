import { useState } from "react";

function Formulario() {
  function cadastrarDados(e) {
    e.preventDefault();
    console.log(`Dados cadastrados ${name} ${tel} ${estado}`);
  }

  const [name, setName] = useState();
  const [tel, setTel] = useState();
  const [estado, setEstado] = useState();

  return (
    <div>
      <h1>Dados Pessoais</h1>
      <form onSubmit={cadastrarDados}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="tel">Telefone:</label>
          <input
            type="number"
            id="tel"
            name="tel"
            placeholder="Insira o seu telefone"
            onChange={(e) => setTel(e.target.value)}
          />
          <br />
          <br />
          Estado:
          <select
            id="estado"
            name="estado"
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value=""> Insira seu estado</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="MG">Minas Gerais</option>
          </select>
        </div>
        <div>
          <br />
          <br />
          <input type="submit" value="cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Formulario;
