<a name="readme-top"></a>
<br />

<div align="center">
  <a href="https://squadup-livid.vercel.app/">
    <img align="center" width="270" height="80" src="https://raw.githubusercontent.com/RenCsar/squadup/main/src/assets/logo-claro.webp">
  </a>
  <h1>SquadUp</h1>
</div>

<p align="center">Code with Confidence, SquadUp with Excellence.</p>
<p align="justify">Precisando escalar seu time de TI de forma rápida e eficiente? Conectamos empresas aos melhores talentos de TI. Encontre o Seu Futuro Profissional aqui!</p>
<p align="center">Acesse o site da <a href="https://squadup-livid.vercel.app/">SquadUp</a>.</p>

<p align="center">
 <a href="#Descrição">Descrição</a> •
 <a href="#Funcionalidades">Funcionalidades</a> •
 <a href="#Tecnologias">Tecnologias utilizadas</a> •
 <a href="#start">Getting Start</a> •
 <a href="#autor">Autor</a>
</p>

---

<br>

<h1 align="center">  
    <p align="center">
        <img width="200" height="400" src="./public/squadup-mobile.gif"><br><br>
        <img width="800" height="400" src="./public/squadup.gif">
    </p>
</h1>

<a id="Descrição"></a>

### Descrição

#### **SquadUp**

SquadUp é uma plataforma que tem como objetivo conectar empresas aos melhores profissionais do mercado. De uma forma rápida, você consegue montar a Squad ideal para o seu projeto. Por meio desta plataforma, é possível encontrar talentos qualificados e especializados em diversas áreas para impulsionar o sucesso dos seus empreendimentos.

Por trás do SquadUp está a empresa fictícia SquadUp S/A., criada com o propósito de demonstrar meus conhecimentos e habilidades em desenvolvimento de software e gestão de projetos.

#### **Motivação e Planejamento**

A motivação para criar o SquadUP foi desenvolver um projeto **MERN (MongoDB, Express, React e Node)** concebido desde suas bases. Isso inclui a elaboração do documento de requisitos do sistema, o branding completo (nome fantasia, slogan, missão, etc.), o design, e as fases de planejamento e pré-desenvolvimento utilizando metodologias ágeis como Scrum e Kanban. O objetivo foi criar uma plataforma robusta e eficiente que atendesse às necessidades tanto das empresas quanto dos profissionais.

#### **Fase Atual e Futuras Atualizações**

Atualmente, a aplicação SquadUp está em sua primeira fase, que consiste principalmente no desenvolvimento do CRUD (Create, Read, Update, Delete) de talentos. Esta é uma etapa crucial para fornecer um Mínimo Produto Viável (MVP) que demonstre a funcionalidade básica da plataforma. Nas próximas atualizações, planejo implementar recursos adicionais, como autenticação de usuários e outros CRUDs, incluindo gestão de usuários e de squads. Estou comprometido em evoluir continuamente meus conhecimentos e complementar a plataforma com novas features.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a id="Funcionalidades"></a>

### Funcionalidades

As funcionalidades da v1.0 são:

- CRUD de talentos: listagem, cadastro, atualização e deleção
- Filtragem de talentos por e-mail
- Filtragem de talentos por stack
- Recuperação paginada dos dados para melhorar o desempenho e a eficiência.
- Aplicação de rate-limit para evitar excesso de requisições e garantir a estabilidade do servidor
- Limitação do tamanho do payload JSON enviado nas solicitações POST e PATCH para evitar ataques de negação de serviço (DoS) devido a solicitações com grandes cargas úteis.
- Limite de, no máximo, 100 novos registros por hora para não sobrecarregar o sistema.
- Exclusão agendada de novos registros nos horários: 0hrs, 6hrs, 12hrs e 18hrs. ---- Versão Beta -----
- Utilizar variáveis de ambiente para configurar informações sensíveis ou configuráveis, como chaves de API, URLs de banco de dados, etc.
- Validar os dados de entrada recebidos das solicitações para garantir que estejam no formato correto e atendam aos critérios de validação necessários.

#### Arquitetura MVC

Arquitetura de pastas baseada no MVC (Model-View-Controller) que separa a responsabilidade de cada componente:

```sh
public/                         # Arquivos estáticos (gifs do readme)
│   └── ...
src/
│
├── controllers/
│   ├── talent.controller.js    # Controladores para operações relacionadas a talentos
│
├── database/
│   └── db.js                   # Configurações do banco de dados   
│
├── middlewares/
│   └── global.middleware.js    # Middleware global
│
├── models/
│   └── talent.js               # Modelos de dados para talentos
│
├── repositories/            
│   └── talent.repositories.js  # Repositories relacionadas a talentos
│
├── routes/
│   └── talent.routes.js        # Rotas relacionadas a talentos
│
├── services/
│   └── talent.service.js       # Serviços relacionados a talentos
│
├── utils/
│   └── ...                     # Arquivos em geral
│
├── .env                        # Variáveis de ambiente
│
├── app.js                      # Arquivo principal da aplicação
└── ...
```



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a id="Tecnologias"></a>

### Tecnologias utilizadas (Backend)

As seguintes ferramentas foram usadas na construção do projeto:

- Node JS
- Express
- Express-rate-limit
- dotenv
- mongoose
- nodemon

Frontend desenvolvido com **React Js**, **Typescript** e **Redux**. Para mais informações sobre o frontend SquadUp [clique aqui](https://github.com/RenCsar/squadup).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a id="start"></a>

## Getting Started

Este guia tem como objetivo fornecer instruções sobre como configurar e iniciar o projeto localmente. O projeto é desenvolvido em NodeJS com Express e MongoDB. Siga as etapas abaixo para começar a usar a aplicação.

### Pré-requisitos

- Node.js instalado
- npm ou yarn instalado
- Conta no GitHub (para clonar o repositório, se necessário)
- MongoDB: [Instalação do MongoDB](https://www.mongodb.com/docs/manual/installation/)


### Installation

_Siga os passos abaixo para configurar e iniciar o projeto_

1. Clone o repositório:
   ```sh
   git clone https://github.com/RenCsar/api-squadup.git
   ```
2. Instale as dependências do projeto:
   ```sh
   cd api-squadup
   npm install
   ```
3. Configure a URL da API:

- Renomeie o arquivo `.env.example` para `.env`.
- Abra o arquivo .env e defina as variáveis de ambiente necessárias:

   ```sh
    DB_USER=seu-usuario-do-banco
    DB_PASS=sua-senha-do-banco
    DB_DB=nome-do-banco
    SECRET=seu-segredo-de-criptografia
    RATE_LIMIT_SEC=intervalo-de-tempo-em-segundos
    RATE_LIMIT_LIMIT=quantidade-de-requisicoes
    MAX_CREATE_PER_HOUR=máximo-de-usuarios
   ```

#### Executando o Projeto
Após seguir os passos de instalação, você pode iniciar o projeto localmente:
  ```sh
    npm start
  ```
O projeto será executado no seu navegador padrão. Se não abrir automaticamente, você pode acessá-lo manualmente em http://localhost:4000.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

### Autor

Made with 💜 by Renan Cesar 👋

[![LinkedIn Badge](https://img.shields.io/badge/-Renan_Cesar-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/renan-cesar/)](https://www.linkedin.com/in/renan-cesar/)
