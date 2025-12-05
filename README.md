🌟 Portal Autismo – Node.js + Express + EJS

Ou seja, não é um portal de notícias, mas sim um site informativo sobre autismo, com páginas, formulários e conteúdo explicativo.
Vou manter a estrutura profissional do modelo e adaptar tudo para o seu site.

✅ README COMPLETO — Portal Autismo

Abaixo está o README final, 100% ajustado para o SEU PROJETO.

Se quiser, posso gerar também versões menores, em inglês, com imagens, com GIFs, ou README.md exportável.

🧩 Portal Autismo – Node.js + Express + EJS








Um site informativo simples e didático sobre o Transtorno do Espectro Autista (TEA), desenvolvido com Node.js, Express, EJS e CSS.
O objetivo do projeto é apresentar conteúdos educacionais sobre autismo de forma clara e acessível, além de permitir interação do usuário por meio de envio de dicas/sugestões.

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

O Portal Autismo é um site focado em:

Explicar o que é o Transtorno do Espectro Autista (TEA)

Apresentar seus níveis e características

Divulgar informações acessíveis ao público

Permitir envio de dicas e sugestões via formulário

Ser simples, didático e fácil de navegar

O site foi criado com arquitetura limpa, usando Node.js + Express no backend e EJS como template engine.

📁 Estrutura do projeto (resumo)
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
│        ├── header.ejs
│        └── footer.ejs
│
└── public/
    ├── css/
    │   └── style.css
    └── imagens/


Funções principais:

app.js → configura servidor, middlewares e rotas

public/ → CSS, imagens e arquivos estáticos

views/ → páginas renderizadas com EJS

routes/public.js → define rotas públicas do portal

⚙️ Como o projeto funciona
🎨 Views (EJS)

As páginas usam EJS + partials para reaproveitar:

Header

Menu

Footer

Exemplo:

<%- include('partials/header') %>

<h2>O que é Autismo?</h2>

<p>Conteúdo informativo aqui...</p>

<%- include('partials/footer') %>

🛣️ Rotas (public.js)

Exemplo de rotas reais:

router.get('/', (req, res) => res.render('index'));
router.get('/autismo', (req, res) => res.render('autismo'));
router.get('/niveis', (req, res) => res.render('niveis'));
router.get('/dicas', (req, res) => res.render('dicas'));
router.post('/dicas', (req, res) => {
    console.log(req.body);
    res.send('Dica recebida!');
});

🔧 app.js (servidor)

Configura Express, EJS e pasta pública:

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', publicRoutes);

🧪 Tecnologias usadas

Node.js

Express

EJS

CSS

HTML semântico

Dotenv (configurações)

Simples e leve — ideal para projetos educativos ou iniciantes.

🖥️ Como instalar e rodar
1. Clone o repositório
git clone https://seu-repositorio-aqui.git
cd site-autismo

2. Instale as dependências
npm install

3. Inicie o servidor
npm start


Ou usando nodemon (se instalado):

npm run dev

4. Acesse
http://localhost:3000

🌐 Rotas disponíveis
Rota	Descrição
/	Página inicial
/autismo	Explicação sobre o que é o autismo
/niveis	Página descrevendo os níveis do espectro
/dicas	Formulário para enviar dicas/sugestões
POST /dicas	Processa o envio do formulário
❗ Troubleshooting

Tela branca ao abrir o site?

→ Verifique se adicionou:

app.set('views', path.join(__dirname, 'views'));


Erro ao carregar partials?

→ Verifique:

views/partials/header.ejs
views/partials/footer.ejs


CSS não funciona?

→ Confirme:

app.use(express.static('public'));


e que o arquivo está em:

public/css/style.css

📌 Comandos úteis
Comando	Função
npm install	Instala dependências
npm start	Inicia o servidor
npm run dev	Inicia com nodemon (auto-reload)
📝 Licença

Este projeto é distribuído sob a licença MIT.
Você pode usar, modificar e distribuir livremente.
