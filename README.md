*****************************************************************************************
*************************    video 3 - 01:05:00             *****************************
continuar da importação do bootstrap { container row col }
*****************************************************************************************




Para iniciar o servidor utilize o comando (dentro da pasta da API):
->        npm run dev
ou para executar em modo debuger:
->        npm run dev:debug


Para criar uma nova tabela utilizando o knex utilize o comando (dentro da pasta da API):
->        npx knex migrate:make create-table-nometabela


Para a migration subir no servidor, rode o comando(dentro da pasta da API):
->       npx knex migrate>latest


### Postgres
Para criar uma imagem no Docker:
->      docker run --name postgresunisal -e POSTGRES_PASSWORD=senha_do_bd -p 5432:5432 -d postgres
Para iniciar uma imagem:
->      docker start postgresunisal
Para visualizar imagens do docker:
->      docker ps -a

### React
Para criar a pasta do react:
->      npx create-react-app ui
Para ativar o react e abrir no navegador (dentro da pasta UI):
->      npm start
Instalar o Bootstrap para react:
->      npm i react-bootstrap bootstrap
Instalar o Styled-Components para react:
->      npm i styled-components
Instalar o axios para react: (responsavel pelas requisições)
->      npm i axios