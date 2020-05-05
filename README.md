Começando uma aplicação com Graphql

no diretorio damos 
$ yarn init -y

depois:
yarn add graphql-yoga

criar uma pasta src onde colocaremos nossos codigos

dentro do src criaremos um arquivo server.js e schema.graphql, esse ultimo é responsavel pelas
rotas.

no graphql temos 3 tipos de rotas
- Query: quando queremos buscar uma informação
- Mutation: quando eu quero criar, alterar ou deletar uma informação
- Resolver: funcionam como nossos controllers