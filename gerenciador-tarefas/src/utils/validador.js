function validarEntrada(texto) {
  if (!texto) {
    return false;
  }

  if (texto.trim() === "") {
    return false;
  }

  return true;
}

module.exports = validarEntrada;