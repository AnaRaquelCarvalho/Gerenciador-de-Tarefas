const {
  criarArquivoSeNaoExistir,
} = require(
  "./services/arquivoService"
);

const {
  mostrarMenu,
  capturarOpcaoUsuario,
} = require("./ui/menu");

function iniciarAplicacao() {
  criarArquivoSeNaoExistir();

  mostrarMenu();

  capturarOpcaoUsuario();
}

iniciarAplicacao();