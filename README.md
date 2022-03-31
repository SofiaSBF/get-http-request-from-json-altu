# get-http-request-from-json-altu
Extrai todos as informações do http request do ALTU e gera um CSV

# Tutorial 
## Instalação
1. Clone esse repositório na sua maquina via terminal (Linux). 
  - Execute o comando no local que deseja clonar ```git clone git@github.com:cesargos/get-http-request-from-json-altu.git```
3. Entre na pasta raiz dele via terminal (Linux)
  - ```cd get-http-request-from-json-altu```
4. Execute os seguintes comandos para instalar:
  a. ```npm install```
  a. ```npm link```

## Executando a CLI
1. Entre no Bot que deseja mapear os Actions http_request
2. Exporte o builder do Bot para JSON
  ![image](https://user-images.githubusercontent.com/62411535/161072310-51f45f39-2b76-450e-99b4-8fc58324a041.png)
3. Escolha a versão que deseja fazer o download:
  ![image](https://user-images.githubusercontent.com/62411535/161073141-9c830820-bf5c-47b8-9704-6ebcfbe3284b.png)
4. Renomeie o arquivo com o nome do bot
5. Crie uma pasta e jogue todos os arquivos desejados
6. Entre na desejada via terminal (Linux) e execute o comando da CLI ```get-http-request-from-json```
7. Insira o nome da Squad responsável pelo Bot
8. Pronto! Vai ser gerado um arquivo CSV na pasta que estiver rodando a CLI
  
Obs: 
- O comando é recursivo e o nome das pastas internas será concatenado com o nome do documento 
- O comando pega apenas arquivos compatíveis com o Builder do ALTU (v. 31/03/2022)
