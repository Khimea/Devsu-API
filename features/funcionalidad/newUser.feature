Feature: Regresivas backend

    Scenario: Hacer un post a nuestra API
        Given Deseo hacer un post con json newUser
        When Recibimos el response
        Then Espero un response con el status 200