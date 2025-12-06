<<<<<<< HEAD
🧩 Portal Autismo – Node.js + Express + EJS

Um site informativo e educativo sobre o Transtorno do Espectro Autista (TEA), criado com Node.js, Express e EJS.
O objetivo é apresentar conteúdos claros sobre autismo, seus níveis e permitir que visitantes enviem dicas/sugestões por meio de um formulário.

🚀 Badges








📌 Índice

Sobre o projeto

Estrutura do projeto

Como o projeto funciona

Views (EJS)

Rotas

Controllers

Tecnologias

Como instalar e executar

Rotas disponíveis

Troubleshooting

Comandos úteis

Licença

💙 Sobre o projeto

O Portal Autismo é um site desenvolvido com fins educativos, contendo:

✔ Explicação sobre o Transtorno do Espectro Autista (TEA)
✔ Informações sobre seus níveis
✔ Conteúdo acessível ao público
✔ Um formulário para envio de dicas ou sugestões
✔ Estrutura limpa e profissional utilizando Express + EJS

📁 Estrutura do projeto
site-autismo/
│ app.js
│ package.json
│
├── routes/
│   └── public.js
│
├── views/
│   ├── index.ejs
│   ├── autismo.ejs
│   ├── niveis.ejs
│   ├── dicas.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
└── public/
    ├── css/
    │   └── style.css
    └── imagens/

Funções principais:

app.js → inicia servidor, carrega rotas e middlewares

views/ → páginas renderizadas com EJS

routes/public.js → rotas abertas ao público

public/ → arquivos estáticos (CSS, imagens, JS)

⚙️ Como o projeto funciona
🎨 Views (EJS)

O projeto utiliza partials para reaproveitar estruturas como header e footer.

Exemplo dentro das views:

<%- include('partials/header') %>

<h1>O que é Autismo?</h1>
<p>Conteúdo informativo aqui...</p>

<%- include('partials/footer') %>

🛣️ Rotas
routes/public.js
router.get('/', (req, res) => res.render('index'));
router.get('/autismo', (req, res) => res.render('autismo'));
router.get('/niveis', (req, res) => res.render('niveis'));
router.get('/dicas', (req, res) => res.render('dicas'));

router.post('/dicas', (req, res) => {
    console.log(req.body);
    res.send('Dica recebida!');
});

🔧 Servidor principal (app.js)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', publicRoutes);

🧪 Tecnologias usadas

Node.js

Express.js

EJS

CSS

HTML semântico

dotenv (para configs)

Leve, simples e ideal para projetos educativos/iniciantes.

🖥️ Como instalar e executar
1️⃣ Clone o repositório:
git clone https://seu-repositorio-aqui.git
cd site-autismo

2️⃣ Instale as dependências:
npm install

3️⃣ Inicie o servidor:
npm start


Ou, se tiver nodemon:

npm run dev


Acesse:
👉 http://localhost:3000

🌐 Rotas disponíveis
Rota	Descrição
/	Página inicial
/autismo	Explicação sobre autismo
/niveis	Níveis do espectro
/dicas	Formulário de dicas
POST /dicas	Processa envio de dicas
❗ Troubleshooting
Tela branca no navegador

Verifique se existe no app.js:

app.set('views', path.join(__dirname, 'views'));

Erro ao carregar partials

Verifique:

views/partials/header.ejs
views/partials/footer.ejs

CSS não funciona

Confirme:

app.use(express.static('public'));


E que o arquivo está em:

public/css/style.css

📌 Comandos úteis
Comando	Função
npm install	Instala dependências
npm start	Inicia o servidor
npm run dev	Inicia com nodemon
📝 Licença

Este projeto está sob a licença MIT — você pode usar, modificar e distribuir livremente.
=======

# Portal de Notícias - Node.js + Express

![Node](https://img.shields.io/badge/Node-18%2B-brightgreen?style=flat&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange?style=flat&logo=mysql)
 
[![Open in Codespaces](https://img.shields.io/badge/Open%20in-Codespaces-24292f?style=flat&logo=github&logoColor=white)](https://github.com/codespaces/new?repo=renato-mendes-uninassau/portal-noticias-express)
[![Dev Containers](https://img.shields.io/badge/Dev%20Containers-0078D4?style=flat&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/docs/devcontainers/containers)

Quick actions: use the **Codespaces** badge to create a codespace for this repo, or read the **Dev Containers** docs to open the project in a VS Code Dev Container.

Um site informativo desenvolvido com **Node.js**, **Express**, **EJS** e **MySQL**.  
Este README foi preparado de forma **didática e organizada**: primeiro apresentamos a **estrutura completa do projeto**, depois explicamos **cada parte** (views, rotas, controllers, models, config, scripts e arquivos públicos).  
Por fim, você encontrará um guia detalhado mostrando **como configurar, conectar ao banco de dados e executar o projeto** em diferentes ambientes.

## Índice

- Sobre o projeto
- Estrutura do projeto (resumo)
- Arquitetura e como o projeto funciona (visão prática)
  - Views (EJS)
  - Routes
  - Controllers
  - Models / Acesso ao banco
  - Seeders
  - Middleware
  - Sessões e autenticação
- Tecnologias
- Pré-requisitos
- Como clonar e configurar
  - Opção 1: Ambiente local
  - Opção 2: Dev Container (VS Code)
  - Opção 3: GitHub Codespaces
- Inicialização (seed)
- Rodando a aplicação
- Rotas principais
- Banco de dados (resumo)
- Troubleshooting
- Comandos úteis
- Contribuindo

---

## Sobre o projeto

Este é um portal de notícias simplificado com área pública e área administrativa. O objetivo é ser material didático para aprender padrões web (MVC), autenticação com sessões, acesso a banco MySQL via `mysql2` e geração de views com EJS.

### Objetivos pedagógicos

- Entender o fluxo requisição → controller → model → view
- Implementar CRUDs completos (notícias, categorias, usuários)
- Trabalhar com autenticação baseada em sessões
- Usar scripts de seed para popular o banco (script incluído)

## Estrutura do projeto (resumo)

Principais arquivos e pastas:

- `app.js` — arquivo principal e configuração de rotas/middleware
- `package.json` — scripts e dependências
- `.env.example` — exemplo de variáveis de ambiente
- `config/db.js` — pool de conexões MySQL (`mysql2/promise`)
- `scripts/seed.js` — cria tabelas e dados iniciais
- `routes/` — rotas públicas e admin
- `controllers/` — lógica de negócio
- `models/` — camadas de acesso a dados (queries)
- `views/` — templates EJS (partials e páginas)
- `public/` — assets estáticos (CSS/JS)

Esta estrutura é proposital: mantém a separação de responsabilidades (MVC) e facilita o aprendizado.

---

## Arquitetura e como o projeto funciona (visão prática)

Esta seção explica os principais elementos do projeto com trechos reais do código para ajudar a entender o fluxo.

### Views (EJS)

As views são templates EJS que geram HTML no servidor. Exemplo: `views/index.ejs` (listagem pública) — inclui `partials/header` e `partials/footer`, itera as notícias e formata datas:

Trecho (simplificado):

```ejs
<%- include('partials/header', { titulo: titulo }) %>

<section class="noticias-grid">
  <h1 class="hero-title"><%= titulo %></h1>
  <% if (noticias.length === 0) { %>
    <p>Nenhuma notícia encontrada.</p>
  <% } else { %>
    <% noticias.forEach(n => { %>
      <article class="news-card">
        <h2><a href="/noticia/<%= n.id %>"><%= n.titulo %></a></h2>
        <p><%= n.resumo %>...</p>
      </article>
    <% }) %>
  <% } %>
</section>

<%- include('partials/footer') %>
```

Observações:
- As partials (`partials/header.ejs`) permitem compartilhar o layout (head, nav, footer).
- Use `<%= ... %>` para saída escapada; `<%- ... %>` para incluir HTML/partials sem escapar.

### Routes (rotas)

As rotas mapeiam URLs para funções nos Controllers. O arquivo `routes/noticias.js` exporta dois routers: `public` e `admin`.

Trecho (resumido):

```js
// routes/noticias.js
routerPublic.get('/', asyncHandler(NoticiaController.indexPublic));
routerPublic.get('/noticia/:id', asyncHandler(NoticiaController.viewNoticia));

routerAdmin.get('/nova', asyncHandler(NoticiaController.novaForm));
routerAdmin.post('/nova', asyncHandler(NoticiaController.criar));
```

No `app.js` esses routers são montados:

```js
app.use('/', noticiasRoutes.public);
app.use('/admin/noticias', verificaLogin, noticiasRoutes.admin);
```

Dica: as rotas administrativas são protegidas por middleware (`verificaLogin`, `verificaAdmin`) definido em `app.js`.

### Controllers

Controllers contêm a lógica de negócio e são responsáveis por chamar Models e renderizar Views. Exemplo: `controllers/NoticiaController.js` — método que lista notícias públicas:

```js
exports.indexPublic = async (req, res) => {
  const noticias = await Noticia.listar(50);
  res.render('index', { titulo: 'Últimas notícias', noticias });
};
```

Métodos de criação e atualização constroem instâncias dos Models e chamam `salvar()` / `atualizar()`.

### Models / Acesso ao banco

Os models encapsulam queries SQL e usam `config/db.js` que exporta um pool `mysql2/promise`.

`config/db.js` (resumo):

```js
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'portal_noticias',
});
module.exports = pool;
```

Exemplo de Model: `models/Noticia.js` — métodos estáticos que realizam selects e inserções preparadas:

```js
static async listar(limit = 20) {
  const [rows] = await db.query(`SELECT n.id, n.titulo, LEFT(n.conteudo, 300) AS resumo, ... LIMIT ?`, [limit]);
  return rows;
}

async salvar() {
  const [result] = await db.execute('INSERT INTO noticias (titulo, conteudo, id_categoria, id_autor) VALUES (?, ?, ?, ?)', [this.titulo, this.conteudo, this.id_categoria, this.id_autor]);
  this.id = result.insertId;
  return this;
}
```

Pontos importantes:
- Sempre use placeholders (`?`) em queries para evitar SQL Injection.
- `mysql2/promise` facilita o uso com `async/await`.

### Seeders (script de inicialização)

O projeto fornece `scripts/seed.js` que cria tabelas se não existirem e popula dados iniciais (categoria "Geral", usuário admin, notícia exemplo).

Execução:

```bash
npm run seed
```

### Middleware

Middleware são funções que executam antes do handler final. Exemplos no projeto:

- `middleware/asyncHandler.js` — wrapper para capturar erros em funções async e repassá-los ao `next()`:

```js
module.exports = function asyncHandler(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
```

- `verificaLogin` e `verificaAdmin` (definidos em `app.js`) — protegem rotas administrativas verificando `req.session.usuario` e `req.session.usuario.perfil`.

### Sessões e autenticação

O projeto usa `express-session` para armazenar o usuário logado em `req.session.usuario`. Um fluxo simplificado de login no `AuthController`:

1. Recebe `email` e `senha` do formulário.
2. Busca usuário com `Usuario.buscarPorEmail(email)`.
3. Compara senhas com `bcrypt.compare`.
4. Em caso de sucesso, guarda `req.session.usuario = { id, nome, email, perfil }`.

As rotas administrativas verificam a presença dessa sessão antes de permitir o acesso.

---

## Tecnologias

- Node.js
- Express.js
- EJS (views)
- MySQL (via `mysql2`)
- bcrypt (hash de senhas)
- express-session (sessões)

## Pré-requisitos

- Node.js (recomenda-se v18+ ou v24)
- npm
- MySQL 8.0+ (ou um serviço compatível)
- VS Code (opcional, recomendado para usar Dev Container)

## Como clonar e configurar

Opção 1 — Ambiente local

1. Clone o repositório:

```bash
git clone https://github.com/renato-mendes-uninassau/express-noticias.git
cd express-noticias
```

2. Instale dependências:

```bash
npm install
```

3. Copie o `.env` de exemplo e edite as credenciais:

```bash
cp .env.example .env
# edite .env conforme seu MySQL local
```

Exemplo mínimo em `.env`:

```env
DB_HOST=127.0.0.1
DB_USER=root
DB_PASS=senha_local
DB_NAME=express_noticias
PORT=3000
SESSION_SECRET=seu_segredo_aqui
```

4. Crie as tabelas e dados de exemplo executando o seed:

```bash
npm run seed
```

5. Rode em modo desenvolvimento (com `nodemon`):

```bash
npm run dev
```

6. Abra no navegador:

```
http://localhost:3000
```

Usuário administrador criado pelo seed:

- Email: `admin@example.com`
- Senha: `admin123`

Opção 2 — Dev Container (recomendado para ambiente padronizado)

Se você usa VS Code com a extensão Dev Containers, o repositório inclui configuração de Dev Container que já prepara Node e MySQL para você.

1. Abra o projeto no VS Code e execute: `Dev Containers: Rebuild and Reopen in Container`.
2. Dentro do container, as variáveis de ambiente podem ser configuradas como `DB_HOST=db` (o serviço MySQL no compose usa o host `db`).
3. Caso necessário dentro do container, execute:

```bash
npm install
cp .env.example .env
npm run seed
npm run dev
```

Observações importantes para Dev Container / Docker Compose

- Se iniciar a stack via `.devcontainer/docker-compose.yml`, o serviço do banco expõe a porta `3306`. Ao usar o container, ajuste `DB_HOST=db` no `.env` (o nome do serviço no compose).
- Se a extensão `cweijan.vscode-database-client` não for instalada automaticamente, abra o painel de Extensões do VS Code enquanto estiver conectado ao container e instale-a no escopo "Dev Container".

Docker Compose — rodando a stack local (app + MySQL)

Se você prefere rodar a aplicação localmente usando Docker Compose (sem abrir o Dev Container do VS Code), há um `docker-compose.yml` na pasta `.devcontainer/` que monta o projeto e cria um serviço MySQL. Exemplo de uso:

```bash
# a partir da raiz do repositório
cd .devcontainer
docker-compose up --build -d

# ver containers
docker-compose ps

# logs do app ou db
docker-compose logs -f app
docker-compose logs -f db

# parar e remover
docker-compose down
```

Exemplo de `.env` recomendado quando usar Docker Compose / Dev Container (atente para `DB_HOST=db`):

```env
# conexão ao banco (quando o DB roda como serviço docker-compose)
DB_HOST=db
DB_USER=root
DB_PASS=root_password
DB_NAME=express_noticias

# aplicação
PORT=3000
SESSION_SECRET=seu_secret_super_seguro_aqui_mude_em_producao
```

Observações:
- O serviço `db` no `docker-compose.yml` expõe a porta `3306` para o host, mas dentro da rede Docker o host do banco é `db`.
- Caso queira acessar o MySQL localmente fora do compose, use `127.0.0.1:3306` e ajuste `DB_HOST`/credenciais.
- Se o `docker-compose.yml` estiver em `.devcontainer/`, execute `cd .devcontainer` antes de executar os comandos acima.

Opção 3 — GitHub Codespaces

Se preferir usar GitHub Codespaces (ambiente remoto padronizado), siga estes passos:

1. No GitHub, abra a página do repositório e clique em **Code → Codespaces → Create codespace**.
2. Aguarde a inicialização do Codespace (primeira vez pode demorar alguns minutos).
3. Abra o terminal no Codespace e execute os comandos de preparação:

```bash
# instalar dependências
npm install

# copiar .env de exemplo e ajustar DB_HOST para o serviço docker/db se aplicável
cp .env.example .env

# executar seed para criar tabelas e usuário admin
npm run seed

# iniciar em modo dev
npm run dev
```

Dica: quando rodar dentro de Codespaces com uma stack Docker (ou Dev Container) o host do banco pode ser `db` — verifique a configuração do ambiente e defina `DB_HOST=db` no `.env` se necessário.

---

## Inicialização (seed)

Este projeto não usa um sistema ORM com migrations; em vez disso há um script `scripts/seed.js` que cria as tabelas necessárias e insere dados exemplo. Execute sempre `npm run seed` em um banco vazio ou rode manualmente os scripts SQL desejados.

Comandos úteis:

- `npm run seed` — cria as tabelas `usuarios`, `categorias`, `noticias` e insere dados de exemplo

## Rodando a aplicação

- Desenvolvimento: `npm run dev` (nodemon)
- Produção: `npm start`

## Rotas principais

Rotas públicas:

- `GET /` — listagem pública de notícias
- `GET /noticia/:id` — visualizar notícia
- `GET /login` — formulário de login
- `POST /login` — processa login

Rotas admin (requer login):

- `GET /admin` — dashboard
- `GET/POST /admin/noticias` — CRUD de notícias (via routes)
- `GET/POST /admin/usuarios` — gerenciar usuários (admin)

Consulte os arquivos em `routes/` para ver definição completa.

## Banco de dados (resumo das tabelas)

- `usuarios` — id, nome, email (unique), senha (hash), perfil (admin/editor/leitor)
- `categorias` — id, nome
- `noticias` — id, titulo, conteudo, id_categoria, id_autor, data_publicacao

O `scripts/seed.js` cria automaticamente a categoria "Geral" e um usuário administrador (`admin@example.com` / `admin123`).

## Troubleshooting (problemas comuns)

- Erro ao conectar ao MySQL: verifique `DB_HOST`, `DB_USER`, `DB_PASS` no `.env` e se o serviço MySQL está ativo.
- Seed falhando por permissões: confira se o usuário do banco tem permissão para criar databases/tabelas.
- Extensão de DB no Dev Container não instala: abra Extensões no VS Code (Remote / Container scope) e instale manualmente; verifique logs de `Dev Containers` no painel `Output`.

## Comandos úteis

- `npm install` — instala dependências
- `npm run seed` — cria tabelas e insere dados de exemplo
- `npm run dev` — executa em modo dev com `nodemon`
- `npm start` — inicia com `node app.js`

## Contribuindo

Contribuições são bem-vindas. Passos sugeridos:

1. Fork
2. Crie uma branch `feature/descricao`
3. Commit e push
4. Abra PR

Pequenas melhorias possíveis: adicionar upload de imagens, paginação, API REST JSON, testes automatizados.
- `npm install` — instala dependências

>>>>>>> 8bea997 (Atualização do CSS e Cadastro)
