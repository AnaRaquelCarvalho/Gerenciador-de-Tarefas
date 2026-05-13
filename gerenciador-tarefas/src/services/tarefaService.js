const {
  lerTarefas,
  salvarTarefas,
} = require("./arquivoService");

const gerarNovoId = require(
  "../utils/geradorId"
);

function adicionarTarefa(descricao) {
  const tarefas = lerTarefas();

  const novaTarefa = {
    id: gerarNovoId(tarefas),
    descricao,
    concluida: false,
  };

  tarefas.push(novaTarefa);

  salvarTarefas(tarefas);

  return novaTarefa;
}

function listarTarefas() {
  return lerTarefas();
}

function buscarTarefaPorId(id) {
  const tarefas = lerTarefas();

  return tarefas.find(
    (tarefa) => tarefa.id === id
  );
}

function atualizarTarefa(
  id,
  novosDados
) {
  const tarefas = lerTarefas();

  const tarefa = tarefas.find(
    (t) => t.id === id
  );

  if (!tarefa) {
    return null;
  }

  Object.assign(tarefa, novosDados);

  salvarTarefas(tarefas);

  return tarefa;
}

function removerTarefa(id) {
  const tarefas = lerTarefas();

  const tarefasAtualizadas =
    tarefas.filter(
      (tarefa) => tarefa.id !== id
    );

  salvarTarefas(tarefasAtualizadas);

  return true;
}

module.exports = {
  adicionarTarefa,
  listarTarefas,
  buscarTarefaPorId,
  atualizarTarefa,
  removerTarefa,
};