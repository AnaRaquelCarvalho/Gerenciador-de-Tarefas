function formatarTarefa(tarefa) {
  const status = tarefa.concluida
    ? "[✓]"
    : "[ ]";

  return `${status} ${tarefa.id} - ${tarefa.descricao}`;
}

module.exports = formatarTarefa;