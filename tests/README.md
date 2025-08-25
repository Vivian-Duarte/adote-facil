# Documentação dos Testes de Aceitação - Adote Fácil

## 1. Introdução

Este documento detalha a suíte de testes de aceitação automatizados desenvolvida para o projeto "Adote Fácil". O objetivo destes testes é simular as jornadas de um usuário real para validar as funcionalidades críticas da aplicação, garantindo que os fluxos principais estejam operando conforme o esperado.

---

## 2. Ferramentas Utilizadas

* **Framework de Teste:** [Cypress](https://www.cypress.io/)
* **Linguagem:** JavaScript / TypeScript
* **Plugin Adicional:** `cypress-file-upload` para simulação de upload de arquivos.


## 3. Pré-requisitos

Antes de executar os testes, certifique-se de que o ambiente esteja devidamente configurado:

1.  **Docker e Docker Compose:** A aplicação deve estar em execução. Na raiz do projeto, execute:
    ```shell
    docker compose up --build
    ```
2.  **Dependências do Frontend:** Todas as dependências do Node.js, incluindo o Cypress, devem estar instaladas. Na pasta `/frontend`, execute:
    ```shell
    npm install
    ```

---

## 4. Estrutura dos Testes

Os arquivos de teste estão localizados no diretório `/frontend/cypress/e2e/`. Cada arquivo corresponde a uma história de usuário ou funcionalidade principal:

* `cadastro.cy.js`: Valida o fluxo de criação de uma nova conta de usuário.
* `login.cy.js`: Valida o fluxo de autenticação, cobrindo cenários de sucesso e de falha (credenciais inválidas).
* `listar_animais.cy.js`: Valida a visualização da lista de animais disponíveis para um usuário autenticado.
* `anunciar_animal.cy.js`: Valida o fluxo completo de cadastro de um novo animal para adoção, incluindo o preenchimento de formulário e upload de imagem.

---

## 5. Como Executar os Testes

Com os pré-requisitos atendidos, siga os passos abaixo:

1.  Abra um terminal e navegue até a pasta do frontend:
    ```shell
    cd frontend
    ```
2.  Execute o seguinte comando para abrir o Executor de Testes (Test Runner) interativo do Cypress:
    ```shell
    npx cypress open
    ```
3.  Na janela do Cypress que se abrir, selecione a aba **E2E Testing**, escolha um navegador (ex: Chrome) e clique no nome do arquivo de teste (`*.cy.js`) que deseja executar.

---

## 6. Bugs Encontrados e Contornados

Durante o desenvolvimento dos testes, o seguinte bug na aplicação foi identificado:

* **Bug:** Erro de hidratação do React (`Minified React error #418`).
* **Localização:** O erro ocorre ao carregar a página de "Disponibilizar animal para adoção" (`/area_logada/disponibilizar_animal`).
* **Impacto:** A exceção não tratada interrompia a execução do teste do Cypress.
* **Ação de Contorno:** Conforme a diretriz do trabalho de não alterar o código-fonte original, foi implementado um contorno no script de teste `anunciar_animal.cy.js` utilizando o listener de eventos `Cypress.on('uncaught:exception', ...)` para ignorar especificamente este erro e permitir que a validação das funcionalidades do formulário pudesse prosseguir.

---