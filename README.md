# projeto simples para o aprendizado básico de GraphQL

- Quais problemas o GraphQL resolve ?
  - Overfetching(buscar informações demais, fazer mais fetching do que o necesssário).
  - Underfteching(buscar dados de menos)

dificuldades:
  - cache
  - erros


## backend
usa um pacote no backend para o graphQL
npm i type-graphql graphql apollo-server class-validator reflect-metadata
https://typegraphql.com/docs/installation.html conferir o link para configurar o type graphql
npm i typescript @types/node ts-node-dev -D

  tem que configurar o package.json 

  "scripts": {
    "dev": "tsnd --respawn --transpile-only index.ts"
   }

  instalou o packge do graphql decorator pra usar a notação
  para que o decorator funcione precisa iniciar o ts
  npx tsc --init
  precisa descomentar essa duas linhas:
  "experimentalDecorators": true,                  
  "emitDecoratorMetadata": true, 

## frontend
npm i @apollo/client graphql
