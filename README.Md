
## Anotações vídeo aula [criando aplicação em camadas](https://www.youtube.com/watch?v=82VxJWf0PVs&t=1239s&ab_channel=DanieleLe%C3%A3o)

- Camadas são as separações de responsabilidades dentro da API.
- Controlador (controller) é o responsável por receber a requisição e por retornar uma resposta ao cliente. Responsabilidade de pegar a requisição e repassar para alguém.
- Serviço (service/use-case) será a responsável por executar regras de negócio da aplicação.
- Persistência (repository) é a camada responsável por realizar a comunicação com o banco de dados.
- Controlador não conhece a camada de persistência. O comunicador não precisa nem saber o que precisa ser realizado.
- A requisição não se comunica com o serviço e muito menos com a persistência.
- A camada de serviço é onde estará toda regra de negócio da aplicação, é onde estará toda a inteligência da aplicação, como validações, por exemplo. Conhece o controller e o repository.
- A camada de repository é a responsável por comunicar com o banco de dados e com o serviço
- A camada de controller é a responsável por capturar a requisição e também se comunicar com a camada de serviço.
