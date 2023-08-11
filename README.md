
# Api Trucks

API de Envio de Dados de Caminhões

Funcionalidades:

    Esta é uma API simples desenvolvida em Node.js utilizando Express e Sequelize, para enviar e armazenar informações de caminhões no formato JSON, incluindo marca, modelo, ano e média de consumo de combustível. A API utiliza o protocolo HTTP para receber e processar os dados, permitindo que os usuários enviem informações sobre os caminhões e as consultem posteriormente.

   
## Tecnologias Utilizadas

    A aplicação foi construída com React Native, utilizando o React Hooks Form em conjunto com o Zod para a validação do formulário.


## Instalação

Certifique-se de ter o Node.js instalado em sua máquina:


Siga os passos abaixo para executar o projeto em seu ambiente local:

    Clone o repositório: git clone https://github.com/LukasLimalkl/api-node.git
    Acesse o diretório do projeto: cd api-node
    Instale as dependências: npm install
## Uso

Após seguir os passos de instalação, você pode executar o projeto utilizando o seguinte comando:

    npm start

    Isso iniciará a aplicação e você poderá acessá-la em http://localhost:3333, ou no link: https://api-node.cyclic.app/.



## API Reference

#### Post  items

```http
  http://localhost:3333/media
  ou
  https://api-node.cyclic.app/media
```

## Modelo de post a ser seguido:

{
  "marca": "Marca do caminhao",
  "modelo": "Modelo do caminhao",
  "ano": "Ano do caminhao",
  "media": "Media do caminhao"
}


## Contribuição

Contribuições são sempre bem-vindas! Se você quiser colaborar com o projeto, siga as etapas abaixo:

    Faça um fork do projeto.
    Crie uma nova branch: git checkout -b minha-nova-feature.
    Faça as alterações desejadas e commit: git commit -m 'Adiciona nova feature'.
    Envie para o repositório remoto: git push origin minha-nova-feature.
    Abra uma Pull Request no GitHub.
