const fs = require("fs");
const path = require("path");

const CAMINHO_ARQUIVO = path.join(
  __dirname,
  "../../data/tarefas.txt"
);

function criarArquivoSeNaoExistir() {
  if (!fs.existsSync(CAMINHO_ARQUIVO)) {
    fs.writeFileSync(
      CAMINHO_ARQUIVO,
      "[]"
    );
  }
}

function lerTarefas() {
  const dados = fs.readFileSync(
    CAMINHO_ARQUIVO,
    "utf-8"
  );

  return JSON.parse(dados);
}

function salvarTarefas(tarefas) {
  fs.writeFileSync(
    CAMINHO_ARQUIVO,
    JSON.stringify(tarefas, null, 2)
  );
}

module.exports = {
  criarArquivoSeNaoExistir,
  lerTarefas,
  salvarTarefas,
};