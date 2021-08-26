Passos para rodar o projeto: 

 - Para configuração do projeto e ambiente.

1° rodar o comando abaixo, ele irá iniciar um container responsável por subir um banco mongoDB
docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb

2°  abrir um gerenciar de mongodb - exemplo MongoAtlas e após isso se conectar no Banco através do host 127.0.0.1:27017.

3° Criar um banco de dados chamado user

4° rodar o npm install para instalar as dependências.

5° rodar o projeto usando o comando npm run server

 - Para testar a aplicação, segue abaixo os endpoints, os testes foram feitos no insomnia:

    - Para adicionar um cpf na lista restrita 
        
        POST localhost:3333/controlscpf/v1/controlscpfs 
          {
            cpf: '610.362.590-48'
          }

    - Para remover um cpf d lista restrita    
        
        DELETE localhost:3333/controlscpf/v1/controlscpfs/610.362.590-48
    
    - LIST localhost:3333/controlscpf/v1/controlscpfs 
        
        GET localhost:3333/controlscpf/v1/controlscpfs 


Neste projeto apliquei a arquitetura clean code, usando os domain: que são a camada de caso de uso, 
onde ocorre a interação com o usuário. Neste sentindo poderia ter escolhido MVC más é uma arquitetura
onde conforme o tempo fica dificil a manuntenção do software, pois é dificil manter o padrão
em uma equipe grande onde vários atuam no código. Apliquei também o padrão de dependency injection as classes
são instanciadas em um único arquivo chamado index.ts

Apliquei também a inversão de dependências que diz que toda classe quando tiver dependências deve depender 
de abstração ou interface.


Sobre o diagrama de UML, criei uma versão inicial, más aconteceu mudanças e não conseguir atualizá-lo





