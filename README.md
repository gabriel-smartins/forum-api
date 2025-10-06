# Forum API - Q&A Service

![Test Workflow](https://github.com/gabriel-smartins/forum-api/actions/workflows/test.yml/badge.svg)
![Badge da Linguagem](https://img.shields.io/github/languages/top/gabriel-smartins/forum-api)
![Badge de Licença](https://img.shields.io/github/license/gabriel-smartins/forum-api)

> API para um serviço de fórum estilo Q&A (Perguntas e Respostas), desenvolvida com foco em escalabilidade e manutenibilidade, aplicando os princípios de Clean Architecture e Domain-Driven Design (DDD).

## 📝 Sobre o Projeto

Este projeto é o backend de uma plataforma de fórum, onde usuários podem postar perguntas, respondê-las e escolher a melhor resposta. A arquitetura foi desenhada para ser robusta e desacoplada, facilitando a evolução e os testes de cada componente do sistema.

A aplicação segue os princípios da **Clean Architecture**, garantindo que a lógica de negócio (domínio) seja totalmente independente de detalhes de infraestrutura como banco de dados e frameworks. O **Domain-Driven Design (DDD)** foi aplicado para modelar o domínio de forma rica, focando nos agregados, entidades e casos de uso centrais do negócio.

### ✨ Principais Funcionalidades

* **Autenticação**: Cadastro e login de usuários com JWT (JSON Web Tokens).
* **Gestão de Perguntas**: CRUD completo para perguntas (tópicos).
* **Gestão de Respostas**: Usuários autenticados podem postar respostas para as perguntas.
* **Melhor Resposta**: O autor da pergunta pode eleger uma resposta como a melhor.
* **Listagem**: Paginação de perguntas e respostas recentes.

## 🏛️ Arquitetura do Projeto

O código é estruturado em camadas, seguindo a regra de dependência da Clean Architecture, onde as camadas mais internas não conhecem as externas.

* **`domain`**: Contém a lógica de negócio pura. Aqui estão as `entidades` (ex: `Question`, `Answer`), `agregados`, `value objects` e as interfaces dos `repositórios`. É o coração da aplicação.
* **`application`**: Orquestra os `use-cases` (casos de uso) da aplicação. Ela utiliza as entidades e as interfaces de repositório do domínio para executar as ações do sistema.
* **`infra`**: Implementações concretas das abstrações.
    * **`database`**: Implementação dos repositórios usando **Prisma**.
    * **`http`**: Camada de apresentação, com os `controllers` do NestJS, `pipes` de validação (com **Zod**) e a configuração dos módulos.
    * **`cryptography`**: Implementação de hash de senhas e JWT.
    * **`env`**: Validação e carregamento das variáveis de ambiente.

## 🛠️ Tecnologias Utilizadas

* **Linguagem:** **TypeScript**
* **Framework Principal:** **NestJS**
* **Gerenciador de Pacotes:** **pnpm**
* **Banco de Dados & ORM:** **PostgreSQL** com **Prisma**
* **Validação de Dados:** **Zod**
* **Testes:** **Vitest** (Unitários e E2E) e **Supertest**
* **Autenticação:** **JWT** com **`@nestjs/jwt`**
* **Criptografia:** **Bcrypt**
* **Variáveis de Ambiente:** **`@nestjs/config`**
* **Containerização:** **Docker**
* **CI/CD:** **GitHub Actions**

## 🚀 Começando

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

* [Node.js](https://nodejs.org/en/) (v18.x ou superior)
* [pnpm](https://pnpm.io/installation)
* [Docker](https://www.docker.com/products/docker-desktop/)

### Instalação

1.  **Clone o repositório**
    ```bash
    git clone [https://github.com/gabriel-smartins/forum-api.git](https://github.com/gabriel-smartins/forum-api.git)
    cd forum-api
    ```

2.  **Instale as dependências**
    ```bash
    pnpm install
    ```

3.  **Configure as variáveis de ambiente**
    Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis com suas credenciais.
    ```bash
    # Exemplo de variáveis no .env
    DATABASE_URL="postgresql://docker:docker@localhost:5432/apisolid?schema=public"
    JWT_PRIVATE_KEY="your-private-key"
    JWT_PUBLIC_KEY="your-public-key"
    ```

4.  **Inicie o banco de dados com Docker**
    Para subir uma instância do PostgreSQL, execute:
    ```bash
    docker-compose up -d
    ```

5.  **Execute as migrações do Prisma**
    Isso criará as tabelas no banco de dados com base no seu schema.
    ```bash
    pnpm prisma migrate dev
    ```

### Executando a Aplicação

Para iniciar a aplicação em modo de desenvolvimento com hot-reload:

```bash
pnpm start:dev
```

A API estará disponível em `http://localhost:3333`.

### 🧪 Executando os Testes

O projeto conta com testes unitários e de ponta-a-ponta (E2E).

* **Rodar todos os testes:**
    ```bash
    pnpm test
    ```
* **Rodar os testes em modo watch:**
    ```bash
    pnpm test:watch
    ```
* **Rodar os testes E2E:**
    ```bash
    pnpm test:e2e
    ```

## 📖 Endpoints da API

Abaixo estão alguns dos principais endpoints disponíveis na API.

#### Autenticação

* `POST /sessions` - Autentica um usuário e retorna um `access_token`.
* `POST /accounts` - Registra um novo usuário.

#### Perguntas (Questions)

* `POST /questions` - Cria uma nova pergunta (requer autenticação).
* `GET /questions` - Lista as perguntas mais recentes com paginação (`?page=1`).
* `GET /questions/:slug` - Obtém os detalhes de uma pergunta pelo seu slug.
* `DELETE /questions/:id` - Deleta uma pergunta (somente o autor).

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Se você tem alguma sugestão para melhorar o projeto, por favor, siga os passos abaixo:

1.  Faça um **Fork** do projeto.
2.  Crie uma nova Branch (`git checkout -b feature/minha-feature`).
3.  Faça o **Commit** das suas alterações (`git commit -m 'feat: Adiciona minha-feature'`).
4.  Faça o **Push** da Branch (`git push origin feature/minha-feature`).
5.  Abra um **Pull Request**.

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais informações.
