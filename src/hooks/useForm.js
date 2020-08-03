import { useState } from 'react';

function useForm(valoresIniciais) {
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

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    valores,
    handleUserInput,
    clearForm,
  };
}

export default useForm;
