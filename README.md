Jogo da Velha
Este é um projeto Next.jscriado com create-next-app.

Introdução
Este projeto implementa um simples jogo da velha utilizando React e Next.js.O jogador humano joga com "X" e o computador joga com "O". O computador tenta bloquear as jogadas do jogador humano e pode vencer o jogo caso tenha uma chance.

Funcionalidades
Jogador humano joga sempre com "X".

O computador joga com "O" e tenta bloquear as jogadas do jogador humano.

Indicação de vencedor ou empate.

Contador de vitórias do jogador humano.

Opção de reiniciar o jogo após uma vitória ou empate.

Comandos para Criar e Rodar o Projeto

Criar o Projeto

npx create-next-app@latest
ou
yarn create next-app
ou
pnpm create next-app

Navegar até o Diretório do Projeto
cd nome-do-seu-projeto

Instalar Dependências
npm install
ou
yarn install
ou
pnpm install

Rodar o Servidor de Desenvolvimento
npm run dev
ou
yarn dev
ou
pnpm dev
ou
bun dev

Abra no Navegador
Abra http://localhost:3000 com seu navegador para ver o resultado.

Como Jogar
Clique em uma célula do tabuleiro para fazer seu jogo ("X").

O computador fará sua operação automaticamente ("O").

O jogo continuará até que haja uma vitória ou um empate.

Clique no botão "Reiniciar Jogo" para começar uma nova partida.

Configuração do Docker
Este projeto agora inclui uma configuração Docker para facilitar o processo de desenvolvimento e implantação.

Construir e Executar a Imagem Docker
Construa a imagem Docker:

docker build -t jogo-da-velha .

Execute o contêiner:
docker run -p 3000:3000 jogo-da-velha

Arquivos Docker Incluídos
Dockerfile: Define a imagem Docker para o projeto.

.dockerignore: Arquivos e diretórios a serem ignorados pelo Docker.

docker-compose.yml (opcional): Facilita a execução do contêiner.

<img width="391" alt="image" src="https://github.com/user-attachments/assets/dcaba97a-690d-4fc8-9358-f1b65eb981b8" />


