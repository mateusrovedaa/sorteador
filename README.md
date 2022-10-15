# Sistema de sorteio

Sistema de sorteio criado para o Tech Talks Day. Ele está implementado em uma API e foi construído um front-end (presente na pasta [views](./views))


Essa aplicação está construida no formato de API e Front-end, utiliza da linguagem TypeScript e do Sequelize para comunicação com banco de dados.
## Executar com containers

Carregar o arquivo de profile para o terminal

```
source environment/profile
```

Realizar o build da aplicação
```
build
```

Iniciar o servidor da API e o banco de dados
```
server
```

Iniciar o front-end
```
web
```

Acessar http://localhost:8080


### Comandos extras

O projeto conta com um comando `docker-compose` personalizado. Para usar, basta digitar:
```
docker-compose [comando]
```

Para visualizar logs
```
docker-compose logs -f [serviço]
```

Para encerrar a aplicação, usar o comando
```
docker-compose down
```
## Executar sem containers

1. Criar uma cópia do arquivo ```.env.example``` com o nome ```.env```
```
cp .env.example .env
```

2. Preencher as variáveis com os valores
```
PORT=

DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
DB_HOST=
DB_PORT=
DB_DIALECT=
```

3. Instalar os pacotes
```
npm install
```

4. Executar o projeto
```
npm run serve
```

5. Abrir os arquivos .html presentes na pasta views no navegador e utilizar.


