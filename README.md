<h3>Objetivo</h3>

Esse Projeto tem como objetivo inicial colocar em prática tudo que venho apredendo ultimamente, compartilhar também de forma a contribuir para que outras pessoas possam aprender também
`` Tenologias empregadas para o desenvolvimento do Projeto: ``
- Node com Typescript
- mongoDB
- Git
- Clean Code
- RabbitMQ
- Padrões Solid
- Docker
- UML


`` Passos para rodar o projeto: ``

 - Para configuração do projeto e ambiente.

      1. rodar o comando abaixo, ele irá iniciar um container responsável por subir um banco mongoDB
      **docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb**

      2.  abrir um gerenciar de mongodb - exemplo MongoAtlas e após isso se conectar no Banco através do host **127.0.0.1:27017.**

      3. Criar um banco de dados chamado **user**

      4. rodar o **npm install** para instalar as dependências.

      5. rodar o projeto usando o comando **npm run server**

 - Para testar a aplicação, segue abaixo os endpoints, os testes foram feitos no insomnia:

    - Para adicionar um cpf na lista restrita 
        
      **POST** localhost:3333/controlscpf/v1/controlscpfs 
          {
            cpf: '610.362.590-48'
          }

    - Para remover um cpf d lista restrita    
        
      **DELETE** localhost:3333/controlscpf/v1/controlscpfs/610.362.590-48
    
    - **LIST** localhost:3333/controlscpf/v1/controlscpfs 
        
      ** GET** localhost:3333/controlscpf/v1/controlscpfs 


Neste projeto apliquei a arquitetura clean code, que é uma arquitetura que tem como objetivo deixar, o código limpo,
claro usando bons padrões como solid. A atuação maior que ocorre nessa arquitetura é no domain: que é a camada de caso de uso, 
onde ocorre a interação com o usuário. Neste sentindo poderia ter escolhido MVC más é uma arquitetura
onde conforme o tempo fica dificil a manuntenção do software, pois é dificil manter o padrão
em uma equipe grande onde vários atuam no código. Apliquei também o padrão de dependency injection as classes
são instanciadas em um único arquivo chamado index.ts

Apliquei também a inversão de dependências que diz que toda classe quando tiver dependências deve depender 
de abstração ou interface.

Banco de dados foi utilizado o MongoDB por ser mais leve e rápido, um banco não relacional.




**Sobre o diagrama de UML, aconteceu mudanças, ainda não é a versão final**

![diagrama_classe_version_inicial png](https://user-images.githubusercontent.com/12539016/130900566-266d23ee-501d-4d5a-ae0b-c75afc8149a0.png)



Como é um projeto que venho desenvolvendo  no intuito de aprender as tecnologias atuais de Mercado, estarei explicando sobre o que venho aprendendo: Rab


**RabbitMQ**

O que é RabbitMQ?

É um servidor de mensageria Opensource, capaz de suportar o protocolo amqp(Advanced Messages Queuing Protocol), é uma solução que vêm sendo adotada no mercado na comunicação de microserviços,  abaixo enumero que essa tecnologia nos oferece: 
1. É uma solução que é compativel com várias linguagens.
2. Garante a assicronicidade entre as aplicações
3. Lida com o tráfego dos dados de forma rápida e confiável. 
4. Controla fila em Background
5. Umas das vantagens com processamento pesado, dependendo da linguagem, a exemplo no Node que é single thread  e uma determinada thread tem que ser finalizada para que aplicação não fique travada esperando o processo ser finalizado, mesmo usando callbacks podem ocorrer falhas no processamento e perda de dados, como timeout e outros...

Alguns Conceitos que são importantes: 

1. Fila: Onde as mensagens ficam e serão retiradas pelo Consumer.
2. Publisher: É responsável por adicionar uma mensagem na fila.
3. Consumer: É responsável por retirar uma mensagem da fila.

Instalação 
Para instalação podem seguir esse artigo interessante que mostra mostra como usar o rabbitmq usando docker, além de mudar a senha do serviço.
http://blog.aeciopires.com/instalando-o-rabbitmq-via-docker/


Nessa aplicação , foi criado a configuração usando o RabbitMQ apenas criando o channel e publicando na fila. O código se encontra no diretório infra.










