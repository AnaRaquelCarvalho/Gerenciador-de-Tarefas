function gerarNovoId(tarefas) {
  if (tarefas.length === 0) {
    return 1;
  }

  const ultimoId =
    tarefas[tarefas.length - 1].id;

  return ultimoId + 1;
}

module.exports = gerarNovoId;