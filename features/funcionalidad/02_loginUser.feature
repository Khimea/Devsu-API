Feature: login usuario

    Scenario: login usuario correctamente
        Given Deseo hacer un post a login con json connectUser
        When Recibimos el response
        Then Espero un response con el status 200
    Scenario: login usuario correctamente con tabla
        Given Deseo agregar al body key: username, value: <username>
        And Deseo agregar al body key: password, value: <password>
        And Deseo hacer un post con el body creado a login
        When Recibimos el response
        Then Espero un response con el status 200
        Examples:
            | username | password    |
            | usuario1 | contraseña1 |
            | usuario2 | contraseña1 |
            | usuario3 | contraseña1 |
            | usuario4 | contraseña1 |
    Scenario: login usuario no existente
        Given Deseo agregar al body key: username, value: <username>
        And Deseo agregar al body key: password, value: <password>
        And Deseo hacer un post con el body creado a singup
        When Recibimos el response
        Then Espero un response con el status 200
        And Valido response con key errorMessage y con valor User does not exist.
        Examples:
            | username                    | password    |
            | esteusuarionoexisteparnada  | contraseña1 |
            | esteusuarionoexisteparnada2 | contraseña1 |
            | esteusuarionoexisteparnada3 | contraseña1 |
            | esteusuarionoexisteparnada4 | contraseña1 |