# Devsu-E2E Prueba tecnica

## Proyecto desarrollado con [PactumJS](https://github.com/pactumjs/pactum) + [Cucumber-JS](https://github.com/cucumber/cucumber-js)

- Dependencia deframework [NodeJS](https://nodejs.org/en/download)
### Ejecucion simple

---

- Clonar repo
- Instalar dependencia `npm install`
- lanzar test `npm run test:cucumber`


### Features
---
- 01_newUser.feature
  - Escenarios para crear usuario
    - Escenario 1 Crea usuario desde un jsonbody
    - Escenario 2 Crea usuario desde una tabla de datos
    - Escenario 3 Crea un usuario ya existente desde una tabla de datos y valida que falle
    
- 02_loginUser.feature
  - Escenarios para login de usuario
    - Escenario 1 Login de usuario desde un jsonbody
    - Escenario 2 Login de usuario desde tabla de datos
    - Escenario 3 Login de usuario inexistente desde una tabla de datos y valida que falle


- Modificar o agregar productos
  ```
    | producto1         | producto2      |
    | Samsung galaxy s7 | Sony xperia z5 |
    | Nokia lumia 1520  | Sony vaio i7   |
  ```
- Modificar usuario y contraseña
  ```
    | Username      | password     |
    | standard_user | secret_sauce |
  ```

---
