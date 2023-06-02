# Projeto - Cypress 001

<p align="left"> <img src="https://guisalmeida.com/static/d625d911d0062643ecc86729b8ecf061/b5381/cypress-cover.png" alt="imagemCypress" /> </p>

## Cypress + mochawesome + pipeline CI/CD Git Actions + locators + commands .
<br>
<div style="border: 1px solid #ccc; padding: 10px;">

1. O site escolhido a ser testado foi o ' [Seu Barriga](https://barrigareact.wcaquino.me/login) '  criado pelo professor Wagner Aquino a fins didáticos.

2. [Casos de teste](https://docs.google.com/spreadsheets/d/1LnYMWvuqOVjX44v0KjdlTlnldO5o7Kur/edit?usp=sharing&ouid=104686743245628511880&rtpof=true&sd=true) documentado.

3. [ Evidência de teste](https://docs.google.com/document/d/1WKwj7pamYH3jnRUpH949W1j4HtR5G6bXc4FZLZpVJOE/edit?usp=sharing) documentado. 

4. Serão criados 3 arquivos de testes para mostrar maneiras diferentes de executar testes e2e:
   
    - [`functional-test.cy.js`](cypress/e2e/functional-tests.cy.js)

    - [`tests-with-commands.cy.js`](cypress/e2e/tests-with-commands.cy.js)
    - [`test-with-locator.cy.js`](cypress/e2e/tests-with-locator.cy.js)
</div>
<br>

### Ferramentas

<div style="border: 1px solid #ccc; padding: 10px;">

- Node.js
- Visual Studio Code
- Cypress 12.13.0
- Mochawesome
- DevTools
</div>

## Instalação

<div style="border: 1px solid #ccc; padding: 10px;">

1. 
    ```bash
    npm init -yes
    ```
2. 
    ```bash
    npm i cypress@12.13.0 -D
    ```
3. ``` js
    npx cypress open
    ```
4. ```js
    npm i mochawesome
    ```

</div>
 
