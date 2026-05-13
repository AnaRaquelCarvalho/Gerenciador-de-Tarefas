const readline = require("readline");

const {
  adicionarTarefa,
  listarTarefas,
  atualizarTarefa,
  removerTarefa,
} = require("../services/tarefaService");

const formatarTarefa = require(
  "../utils/formatador"
);

const validarEntrada = require(
  "../utils/validador"
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mostrarMenu() {
  console.log("\n===== MENU =====");

  console.log(
    "1 - Adicionar tarefa"
  );

  console.log(
    "2 - Listar tarefas"
  );

  console.log(
    "3 - Atualizar tarefa"
  );

  console.log(
    "4 - Remover tarefa"
  );

  console.log("0 - Sair");
}

function capturarOpcaoUsuario() {
  rl.question(
    "\nEscolha uma opção: ",
    (opcao) => {
      processarOpcao(opcao);
    }
  );
}

function processarOpcao(opcao) {
  switch (opcao) {
    case "1":
      rl.question(
        "Descrição da tarefa: ",
        (descricao) => {
          if (
            !validarEntrada(descricao)
          ) {
            console.log(
              "Descrição inválida."
            );

            mostrarMenu();

            return capturarOpcaoUsuario();
          }

          const tarefa =
            adicionarTarefa(
              descricao
            );

          console.log(
            "\nTarefa adicionada:"
          );

          console.log(
            formatarTarefa(tarefa)
          );

          mostrarMenu();

          capturarOpcaoUsuario();
        }
      );

      break;

    case "2":
      const tarefas =
        listarTarefas();

      console.log("\nTAREFAS:");

      tarefas.forEach((tarefa) => {
        console.log(
          formatarTarefa(tarefa)
        );
      });

      mostrarMenu();

      capturarOpcaoUsuario();

      break;

    case "3":
      rl.question(
        "ID da tarefa: ",
        (id) => {
          rl.question(
            "Nova descrição: ",
            (descricao) => {
              const tarefa =
                atualizarTarefa(
                  Number(id),
                  {
                    descricao,
                  }
                );

              if (!tarefa) {
                console.log(
                  "Tarefa não encontrada."
                );
              } else {
                console.log(
                  "Tarefa atualizada."
                );
              }

              mostrarMenu();

              capturarOpcaoUsuario();
            }
          );
        }
      );

      break;

    case "4":
      rl.question(
        "ID da tarefa: ",
        (id) => {
          removerTarefa(Number(id));

          console.log(
            "Tarefa removida."
          );

          mostrarMenu();

          capturarOpcaoUsuario();
        }
      );

      break;

    case "0":
      console.log(
        "Encerrando sistema..."
      );

      rl.close();

      break;

    default:
      console.log(
        "Opção inválida."
      );

      mostrarMenu();

      capturarOpcaoUsuario();
  }
}

module.exports = {
  mostrarMenu,
  capturarOpcaoUsuario,
};