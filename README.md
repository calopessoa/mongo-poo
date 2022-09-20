
# Car Shop

This Mongoose-POO (no pun intended) is an API built for managing a nice, albeit simple, car shop. Fully CRUD, possible to: Create, Read, Update and Delete.

Unitary tests were developed using mocha, chai and sinon.

## Lessons learned

A RESTful API with Mongoose DB creation through MSC (Model, Service and Controller) architecture

## Technologies

Node, Express, Typescript, Mongoose, MongoDB, Zod, POO, SOLID, Mocha, Chai e Sinon.

## Running this application
<details> 
  <summary>
    <strong>🐳 Running on docker</strong>
  </summary>

Clone this project

```bash
  git clone git@github.com:calopessoa/mongo-poo.git
```

Now into the project's folder

```bash
  cd mongo-poo
```

Install dependencies

```bash
  npm install
```

Now up the container...

```bash
  docker-compose up -d
```

Boot up the server!

```bash
   npm run dev
```
</details>

<details> 
  <summary>
    <strong>✅ Running locally</strong>
  </summary>
  
  In case you don't have MongoDB installed or just want to use Docker, just follow this guide:
  
  Dowload MongoDB image:
  
  ```bash
    docker pull mongo
  ```
  
  Create its container:
  
   ```bash
    docker run --name <container-name> -p 27017:27017 -d mongo
   ```
   
  Check up if the container is running:
  
   ```bash
    docker container ls
   ```
  Now run the server:
    
   ```bash
    npm run dev
   ```
 
 </details>
 
 ## Running the tests

execute the following command:

```bash
  npm run test:dev
```


