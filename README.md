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
