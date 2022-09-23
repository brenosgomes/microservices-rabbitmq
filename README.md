<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


    


## Descrição

API com foco na comunicação de MicroServiços. A primeira aplicação (api-primary) é responsavel por salvar os produtos no banco A e envia-los para o rabbitmq, enquanto a segunda (api-secondary) recebe os dados do rabbitmq e os salva no banco B.

## Instalação

```bash
$ npm install
```

## Executando os apps

```bash
# docker
$ docker-compose up -d

# api-primary
$ npm run start api-primary

# api-secondary
$ npm run start api-secondary
```

## Testando

```bash
# Enviando produtos:
POST http://localhost:3000/products-a

# Listando produtos:
GET http://localhost:3001/products-b

# JSON do POST
{
	"name": "string",
	"description": "string",
	"value": number
}
```