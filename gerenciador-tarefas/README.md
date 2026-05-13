# ✅ TaskFlow CLI

> Produtividade direto do terminal.

---

# 📌 Sobre o Projeto

O **TaskFlow CLI** é uma aplicação de linha de comando desenvolvida em Node.js para gerenciamento de tarefas.

O sistema permite:

- ➕ Criar tarefas
- 📋 Listar tarefas
- ✏️ Atualizar tarefas
- ❌ Remover tarefas
- 💾 Persistir dados em arquivo local

Toda a interação acontece diretamente pelo terminal utilizando menus interativos.

---

# 👩‍💻 Desenvolvedora

**Ana Carvalho**

---

# 🚀 Tecnologias Utilizadas

- Node.js
- JavaScript
- File System (`fs`)
- Readline
- Path

---

# 📂 Estrutura do Projeto

```txt
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
```

---

# ⚙️ Funcionalidades

O sistema implementa operações CRUD:

| Operação | Descrição |
|---|---|
| Create | Criar tarefas |
| Read | Listar tarefas |
| Update | Atualizar tarefas |
| Delete | Remover tarefas |

---

# ▶️ Como Executar o Projeto

## 1. Instale o Node.js

Baixe em:

https://nodejs.org

---

## 2. Clone o repositório

```bash
git clone https://github.com/seu-usuario/taskflow-cli.git
```

---

## 3. Acesse a pasta do projeto

```bash
cd gerenciador-tarefas
```

---

## 4. Instale as dependências

```bash
npm install
```

---

## 5. Execute o projeto

```bash
npm start
```

Ou:

```bash
node src/app.js
```

---

# 🖥️ Interface do Sistema

Ao iniciar:

```txt
===== MENU =====
1 - Adicionar tarefa
2 - Listar tarefas
3 - Atualizar tarefa
4 - Remover tarefa
0 - Sair
```

---

# 📋 Funcionalidades Detalhadas

# ➕ Adicionar Tarefa

## Fluxo

O usuário escolhe:

```txt
1
```

Depois informa:

```txt
Descrição da tarefa:
```

---

## Exemplo

### Entrada

```txt
Escolha uma opção: 1
Descrição da tarefa: Estudar Node.js
```

---

### Saída

```txt
Tarefa adicionada:
[ ] 1 - Estudar Node.js
```

---

## Estrutura da tarefa criada

```json
{
  "id": 1,
  "descricao": "Estudar Node.js",
  "concluida": false
}
```

---

# 📋 Listar Tarefas

## Fluxo

O usuário escolhe:

```txt
2
```

---

## Exemplo de saída

```txt
TAREFAS:

[ ] 1 - Estudar Node.js
[ ] 2 - Fazer exercícios
```

---

# ✏️ Atualizar Tarefa

## Fluxo

O usuário escolhe:

```txt
3
```

Depois informa:
- ID da tarefa
- nova descrição

---

## Exemplo

### Entrada

```txt
Escolha uma opção: 3
ID da tarefa: 1
Nova descrição: Estudar Node.js avançado
```

---

### Saída

```txt
Tarefa atualizada.
```

---

## Caso a tarefa não exista

```txt
Tarefa não encontrada.
```

---

# ❌ Remover Tarefa

## Fluxo

O usuário escolhe:

```txt
4
```

Depois informa:

```txt
ID da tarefa:
```

---

## Exemplo

### Entrada

```txt
Escolha uma opção: 4
ID da tarefa: 1
```

---

### Saída

```txt
Tarefa removida.
```

---

# 🚪 Encerrar Sistema

## Fluxo

```txt
0
```

---

## Saída

```txt
Encerrando sistema...
```

---

# 💾 Persistência de Dados

As tarefas são armazenadas no arquivo:

```txt
data/tarefas.txt
```

---

# 📦 Estrutura do Arquivo

Apesar da extensão `.txt`, o conteúdo é salvo em formato JSON.

## Exemplo

```json
[
  {
    "id": 1,
    "descricao": "Estudar Node.js",
    "concluida": false
  }
]
```

---

# 🔄 Funcionamento da Persistência

# 📖 Leitura

O sistema:
1. abre o arquivo;
2. lê o conteúdo;
3. converte JSON para objetos JavaScript.

Utilizando:

```js
JSON.parse()
```

---

# ✍️ Escrita

O sistema:
1. converte objetos para JSON;
2. salva novamente no arquivo.

Utilizando:

```js
JSON.stringify()
```

---

# 🧠 Arquitetura do Sistema

# 📁 Services

Responsável por:
- regras de negócio;
- CRUD;
- persistência.

Arquivos:
- `arquivoService.js`
- `tarefaService.js`

---

# 🧰 Utils

Responsável por:
- validação;
- formatação;
- geração de IDs.

Arquivos:
- `formatador.js`
- `geradorId.js`
- `validador.js`

---

# 🖥️ UI

Responsável pela interação com o usuário.

Arquivo:
- `menu.js`

---

# 🚀 Arquivo Principal

## `app.js`

Responsável por:
- iniciar o sistema;
- criar arquivo;
- iniciar menu;
- controlar fluxo inicial.

---

# 📌 Modelo de Dados

## Estrutura da Tarefa

```json
{
  "id": 1,
  "descricao": "Texto da tarefa",
  "concluida": false
}
```

---

# 📊 Campos

| Campo | Tipo | Descrição |
|---|---|---|
| id | Number | Identificador único |
| descricao | String | Texto da tarefa |
| concluida | Boolean | Status da tarefa |

---

# 🔁 Fluxo Geral

```txt
Usuário
   ↓
Menu CLI
   ↓
Processamento da opção
   ↓
Services
   ↓
Arquivo TXT/JSON
```

---

# 🛡️ Tratamento de Erros

O sistema possui:
- validação de entradas;
- verificação de IDs;
- criação automática do arquivo;
- controle de arquivo vazio.

---

# 🔮 Melhorias Futuras

O projeto pode evoluir para:

- API REST com Express
- Banco de dados MongoDB
- PostgreSQL
- SQLite
- Interface Web
- Login de usuários
- Docker
- Testes automatizados
- Deploy em nuvem

---

# 🎯 Público-Alvo

Projeto indicado para:
- estudantes;
- iniciantes em Node.js;
- aprendizado de CRUD;
- estudo de terminal;
- prática de arquitetura modular.

---

# 📄 Licença

Este projeto está sob a licença ISC.

---

# ⭐ Conclusão

O **TaskFlow CLI** é uma aplicação modular desenvolvida em Node.js que implementa um sistema completo de gerenciamento de tarefas via terminal utilizando operações CRUD e persistência local em arquivo.

---