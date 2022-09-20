
# Car Shop

This Mongoose-POO (no pun intended) is an API built for managing a nice, albeit simple, car shop. Fully CRUD, possible to: Create, Read, Update and Delete.

Unitary tests were developed using mocha, chai and sinon.

## Lessons learned

A RESTful API with Mongoose DB creation through MSC (Model, Service and Controller) architecture

## Technologies

Node, Express, Typescript, Mongoose, MongoDB, Zod, POO, SOLID, Mocha, Chai e Sinon.

## Rodando aplicação
<details> 
  <summary>
    <strong>🐳 Rodando o servidor no Docker</strong>
  </summary>

Clone o projeto

```bash
  git clone git@github.com:calopessoa/mongo-poo.git
```

Entre no diretório do projeto

```bash
  cd mongo-poo
```

Instale as dependências

```bash
  npm install
```

Suba o container Docker

```bash
  docker-compose up -d
```

Inicie o servidor dentro do container

```bash
   npm run dev
```
</details>

<details> 
  <summary>
    <strong>✅ Rodando localmente</strong>
  </summary>
  
  Caso não tenha o MongoDB instalado em sua máquina e deseje usar o Docker, é só seguir os passos a seguir:

  Baixe a imagem do MongoDB:
  
  ```bash
    docker pull mongo
  ```
  
  Crie o contêiner do MongoDB:
  
   ```bash
    docker run --name <nome-do-container> -p 27017:27017 -d mongo
   ```
   
  Confira se o contêiner está rodando:
  
   ```bash
    docker container ls
   ```
  Execute o servidor localmente:
    
   ```bash
    npm run dev
   ```
 
 </details>
 
 ## Rodando os testes

Para rodar os testes, execute o seguinte comando:

```bash
  npm run test:dev
```


