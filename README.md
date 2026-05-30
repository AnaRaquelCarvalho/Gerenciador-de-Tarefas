✅ CLI do TaskFlow
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CLI](https://img.shields.io/badge/CLI-Terminal-blue?style=for-the-badge)
![CRUD](https://img.shields.io/badge/CRUD-Complete-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-ISC-green?style=for-the-badge)
Produtividade direto do terminal.

📌 Sobre o Projeto
O TaskFlow CLI é uma aplicação de linha de comando desenvolvida em Node.js para gerenciamento de tarefas.

O sistema permite:

➕ Criar tarefas
📋 Listar tarefas
✏️ Atualizar tarefas
❌ Remover tarefas
💾 Persistir dados em arquivo local
Toda a interação acontece diretamente pelo terminal utilizando menus interativos.

👩‍💻 Desenvolvedora
Ana Carvalho

🚀 Tecnologias Utilizadas
Node.js
JavaScript
Sistema de Arquivos ( fs)
Readline
Caminho
📂 Estrutura do Projeto
gerenciador-tarefas/
│
├── src/
│   ├── services/
│   │   ├── arquivoService.js
│   │   └── tarefaService.js
│   │
│   ├── utils/
│   │   ├── formatador.js
│   │   ├── geradorId.js
│   │   └── validador.js
│   │
│   ├── ui/
│   │   └── menu.js
│   │
│   └── app.js
│
├── data/
│   └── tarefas.txt
│
├── package.json
└── .gitignore
⚙️ Funcionalidades
O sistema implementa operações CRUD:

Operação	Descrição
Criar	Criar tarefas
Ler	Listar tarefas
Atualizar	Atualizar tarefa
Excluir	Remover tarefas
▶️Como Executar o Projeto
1. Instale o Node.js
Baixe em:

https://nodejs.org

2. Clonar o
git clone https://github.com/seu-usuario/taskflow-cli.git
3. Acesse a pasta do projeto
cd gerenciador-tarefas
4. Instale as responsabilidades
npm install
5. Execute o projeto
npm start
Ou:

node src/app.js
🖥️ Interface do Sistema
Ao iniciar:

===== MENU =====
1 - Adicionar tarefa
2 - Listar tarefas
3 - Atualizar tarefa
4 - Remover tarefa
0 - Sair
📋 Funcionalidades interessantes
➕ Adicionar tarefa
Fluxo
O usuário escolheu:

1
Depois informa:

Descrição da tarefa:
Exemplo
Entrada
Escolha uma opção: 1
Descrição da tarefa: Estudar Node.js
Às vezes, isso acontece por si só.
Tarefa adicionada:
[ ] 1 - Estudar Node.js
Estrutura da tarefa criada
{
  "id": 1,
  "descricao": "Estudar Node.js",
  "concluida": false
}
📋 Listar Tarefas
Fluxo
O usuário escolheu:

2
Exemplo de saída
TAREFAS:

[ ] 1 - Estudar Node.js
[ ] 2 - Fazer exercícios
✏️ Atualizar Tarefa
Fluxo
O usuário escolheu:

3
Depois informa:

ID da tarefa
nova descrição
Exemplo
Entrada
Escolha uma opção: 3
ID da tarefa: 1
Nova descrição: Estudar Node.js avançado
Às vezes, isso acontece por si só.
Tarefa atualizada.
Caso a tarefa não exista
Tarefa não encontrada.
❌ Removedor
Fluxo
O usuário escolheu:

4
Depois informa:

ID da tarefa:
Exemplo
Entrada
Escolha uma opção: 4
ID da tarefa: 1
Às vezes, isso acontece por si só.
Tarefa removida.
🚪 Encerrar Sistema
Fluxo
0
Às vezes, isso acontece por si só.
Encerrando sistema...
💾 Persistência de Dados
As tarefas são armazenadas no arquivo:

data/tarefas.txt
📦 Estrutura do Arquivo
Apesar da extensão .txt, o conteúdo é salvo no formato JSON.

Exemplo
[
  {
    "id": 1,
    "descricao": "Estudar Node.js",
    "concluida": false
  }
]
🔄 Funcionamento da Persistência
📖 Leitura
O sistema:

abre o arquivo;
lê o conteúdo;
converter JSON para objetos JavaScript.
Utilizando:

JSON.parse()
✍️ Escrita
O sistema:

conversão para JSON;
salva novamente no arquivo.
Utilizando:

JSON.stringify()
🧠 Arquitetura do Sistema
📁 Serviços
Responsável por:

regras de negócio;
CRUD;
persistência.
Arquivos:

arquivoService.js
tarefaService.js
🧰 Utilitários
Responsável por:

validação;
formatação;
geração de IDs.
Arquivos:

formatador.js
geradorId.js
validador.js
🖥️ Interface do usuário
Responsável pela interação com o usuário.

Arquivo:

menu.js
🚀 Arquivo Principal
app.js
Responsável por:

iniciar o sistema;
criar arquivo;
iniciar menu;
controlar fluxo inicial.
📌 Modelo de Dados
Estrutura da
{
  "id": 1,
  "descricao": "Texto da tarefa",
  "concluida": false
}
📊 Campos
Campo	Tipo	Descrição
eu ia	Número	Identificador único
descrição	Corda	Texto da tarefa
concluído	Booleano	Status da tarefa
🔁 Fluxo Geral
Usuário
   ↓
Menu CLI
   ↓
Processamento da opção
   ↓
Services
   ↓
Arquivo TXT/JSON
🛡️ Tratamento de erros
O sistema possui:

validação de entradas;
verificação de IDs;
criação automática de arquivo;
controle de arquivo vazio.
🔮 Melhores Futuras
O projeto pode evoluir para:

API REST com Express
Banco de dados MongoDB
PostgreSQL
SQLite
Interface Web
Login de usuários
Docker
Testes automatizados
Implantar em .
🎯 Público-Alvo
Projeto indicado para:

estudantes;
iniciantes em Node.js;
guia de CRUD;
estudo de terminal;
prática de arquitetura modular.
📄 Licença
Este projeto está sob licença ISC.

⭐ Conclusão
O TaskFlow CLI é uma aplicação modular desenvolvida em Node.js que implementa um sistema completo de gerenciamento de tarefas via terminal utilizando operações CRUD e persistência local em arquivo.

