Feature: Nuevo usuario

    Scenario: Crear nuevo usuario correctamente
        Given Deseo hacer un post a singup con json newUser
        When Recibimos el response
        Then Espero un response con el status 200
    Scenario: Crear nuevo usuario correctamente con tabla
        Given Deseo agregar al body key: username, value: <username>
        And Deseo agregar al body key: password, value: <password>
        And Deseo hacer un post con el body creado a singup
        When Recibimos el response
        Then Espero un response con el status 200
        Examples:
            | username | password    |
            | usuario1 | contraseña1 |
            | usuario2 | contraseña1 |
            | usuario3 | contraseña1 |
            | usuario4 | contraseña1 |
    Scenario: Crear nuevo usuario ya existente
        Given Deseo agregar al body key: username, value: <username>
        And Deseo agregar al body key: password, value: <password>
        And Deseo hacer un post con el body creado a singup
        When Recibimos el response
        Then Espero un response con el status 200
        And Valido response con key errorMessage y con valor This user already exist.
        Examples:
            | username | password    |
            | usuario1 | contraseña1 |
            | usuario2 | contraseña1 |
            | usuario3 | contraseña1 |
            | usuario4 | contraseña1 |