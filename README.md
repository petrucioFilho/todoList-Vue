# todoList-Vue

Uma aplicação de gerenciamento de tarefas desenvolvida com **Vue 3**, **TypeScript**, **Bootstrap** e integrada com uma API para manipulação das tarefas.

## Funcionalidades

- **Criar Tarefas:** Adicione novas tarefas com título e descrição.
- **Listar Tarefas:** Visualize todas as tarefas na tela inicial.
- **Editar Tarefas:** Altere o título e a descrição de uma tarefa existente.
- **Apagar Tarefas:** Remova tarefas específicas da lista.

## Estrutura do Projeto

### Páginas

- **Home (View/Home):**  
  Tela principal onde são criadas e listadas as tarefas.

- **UpdateTodoList (View/TodoUpdate):**  
  Página dedicada para a edição das tarefas selecionadas.

### Componentes

- **Todo (Components/Todo):**  
  Representa cada tarefa individualmente, com:
  - **Título**
  - **Descrição**
  - **ID**
  - Botões de **apagar** e **editar**

### Integração com API

- A pasta **function** contém todas as funções de manipulação de dados e integração com a API, garantindo a separação da lógica de negócios.

### Navegação

- A navegação entre as páginas **Home** e **TodoUpdate** é realizada com o **vue-router**.

## Tecnologias Utilizadas

- **Vue 3**
- **TypeScript**
- **Bootstrap**
- **Vue Router**

## Estrutura do projeto

src  
├── components  
│ └── Todo.vue  
├── functions  
│ └── functions.ts  
├── views  
│ ├── Home.vue  
│ └── TodoUpdate.vue
├── router  
│ └── index.ts  
├── main.ts  
└── App.vue

## Como Usar

1. Clone o repositório:

   ```bash
   git clone https://github.com/petrucioFilho/todoList-Vue.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run serve
   ```
