# 🧪 Projeto de Automação Híbrida (UI & API) com Cypress + Cucumber

Este projeto contém uma esteira completa de testes automatizados cobrindo tanto a interface gráfica (Front-end) quanto os endpoints de serviços (API/Back-end) da plataforma **ServeRest**, utilizando **Cypress** e a abordagem **BDD (Behavior-Driven Development)** com Gherkin/Cucumber.

## 🚀 Arquitetura e Organização do Projeto

O projeto foi estruturado utilizando boas práticas de desenvolvimento, aplicando o padrão **Page Objects** para os testes de interface e **Service Objects** para o isolamento de requisições HTTP da API.

```text
cypress/
├── e2e/
│   ├── api/                # Cenários de testes de API (.feature e .steps.js)
│   │   ├── login/
│   │   ├── produtos/
│   │   └── usuarios/
│   └── ui/                 # Cenários de testes de Front-end (Interface)
│       ├── login/
│       └── ...
├── page_objects/           # Elementos e ações das telas do Front-end
└── services/               # Camada de requisições HTTP (Service Objects) para a API

---

🛠️ Tecnologias Utilizadas
○ Cypress (v13+) - Framework de testes ponta a ponta.
○ @badeball/cypress-cucumber-preprocessor - Integração e execução de cenários em Gherkin.
○ Webpack - Pré-processador para empacotamento dos arquivos de testes.
○ JavaScript (ES6+) - Linguagem utilizada para a escrita dos scripts.

---

⚙️ Configuração Multi-Ambiente
As URLs de execução foram centralizadas de forma inteligente no arquivo cypress.config.js para evitar duplicação de código (DRY), separando os escopos de ambiente de forma transparente para o Cypress:

○ Base URL (Front-end): https://front.serverest.dev

○ API URL (Back-end): https://serverest.dev (injetada via variáveis de ambiente Cypress.env)

---

🏃💨 Como Rodar os Testes

○ Certifique-se de ter as dependências instaladas rodando npm install. No arquivo package.json, configuramos três scripts dedicados para facilitar a execução da esteira:

🌟 1. Rodar a Esteira Completa (UI + API)
Executa de forma sequencial todos os cenários de teste mapeados no projeto:

```bash
npm run cy:run:all
```

💻 2. Rodar Apenas os Testes de Front-end (UI)
Foca exclusivamente na validação de comportamento e fluxos da interface do usuário:

```bash
npm run cy:run:ui
```

🔌 3. Rodar Apenas os Testes de API (Back-end)
Dispara testes rápidos e isolados diretamente nos endpoints, garantindo independência de massa de dados através de geração dinâmica de payloads:

```bash
npm run cy:run:api
```

🖥️ 4. Abrir no Modo Visual (Cypress Runner)
Caso queira acompanhar a execução pelo painel interativo do Cypress:

```bash
npx cypress open
```
---

Desenvolvido com foco em qualidade e engenharia de software de alta performance. 🚀