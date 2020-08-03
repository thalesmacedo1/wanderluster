import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    description: '',
    cor: '',
  };
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(key, value) {
    setValores({
      ...valores,
      [key]: value,
    });
  }

  function handleUserInput(e) {
    setValor(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      valores,
    ]);
    setValores(valoresIniciais);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (resServidor) => {
      const resposta = await resServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {valores.nome}
      </h1>

      <form onSubmit={handleFormSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleUserInput}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={valores.description}
          onChange={handleUserInput}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleUserInput}
        />
        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0
        && (
          <div>
            Loading...
          </div>
        )}
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
