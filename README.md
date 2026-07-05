# 🧪 Automação de Testes End-to-End - Front-end ServeRest

Este projeto contém a automação de testes da interface gráfica (UI) da plataforma **ServeRest**, desenvolvida como um desafio técnico focado em garantir a qualidade e estabilidade dos fluxos de autenticação, cadastro e gerenciamento do sistema.

A arquitetura foi desenhada utilizando as melhores práticas do mercado, combinando **Cypress** para a execução dos testes, **BDD (Behavior-Driven Development)** com Cucumber para a escrita de cenários focados em negócio, e o padrão **Page Objects** para garantir a manutenibilidade do código.

---

## 🛠️ Tecnologias Utilizadas

* **Cypress**: Framework de automação de testes focado em aplicações web modernas.
* **@badeball/cypress-cucumber-preprocessor**: Pré-processador para habilitar o uso de arquivos `.feature` (Gherkin/Cucumber) no Cypress.
* **JavaScript (ES6+)**: Linguagem base para desenvolvimento dos scripts e objetos.

---

## 📐 Arquitetura do Projeto

O projeto segue uma estrutura modular para separar claramente as responsabilidades de negócio da lógica de automação:

```text
├── cypress/
│   ├── e2e/
│   │   └── ui/
│   │       ├── login/        # Cenários BDD e passos de Autenticação/Cadastro
│   │       ├── produtos/     # Cenários BDD e passos de Gestão de Produtos
│   │       └── usuarios/     # Cenários BDD e passos de Listagem de Usuários
│   ├── page_objects/         # Classes contendo seletores e métodos encapsulados
│   └── support/              # Arquivos de configuração global e comandos customizados
├── .gitignore                # Arquivo de exclusão do Git (ignora node_modules, logs, etc)
├── cypress.config.js         # Configurações globais do Cypress e Plugins do Cucumber
└── package.json              # Gerenciador de dependências e scripts do projeto

Principais Práticas Aplicadas:
- Page Objects Pattern: Todos os seletores de elementos Web (data-testid) e interações de página estão encapsulados em classes exclusivas dentro da pasta page_objects.

- Independência de Testes (Resiliência): Os cenários são completamente isolados. Cada especificação gera sua própria massa de dados em tempo de execução utilizando timestamps dinâmicos (Date.now()), evitando falhas por dados viciados ou duplicados na plataforma ServeRest.

- Massa Dinâmica Compartilhada: Uso avançado do ecossistema Cypress para tráfego e sincronismo de variáveis dinâmicas em tempo de execução.

📋 Cenários de Teste Cobertos (BDD)
👤 Autenticação e Registro

- Cadastro de um novo usuário administrador com credenciais válidas e redirecionamento correto.

- Login com sucesso utilizando uma conta existente.

- Exibição de mensagens de alerta ao tentar logar com senha inválida.

📦 Cadastro e Listagem de Produtos

- Fluxo completo de login como administrador, navegação, preenchimento de formulário (incluindo upload mockado de imagem do produto) e validação da inserção correta na tabela de inventário.

👥 Listagem de Usuários

- Validação em tempo real da inserção e visibilidade de novos usuários cadastrados dentro do painel administrativo.

🚀 Como Executar o Projeto Localmente
Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (versão 18 ou superior recomendada)
- Git

