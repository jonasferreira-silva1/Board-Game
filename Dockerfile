# Use a imagem oficial do Node.js (versão 18)
FROM node:18

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do projeto para o diretório de trabalho no contêiner
COPY . .

# Construa a aplicação Next.js
RUN npm run build

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para construir e rodar a aplicação
CMD ["sh", "-c", "npm run build && npm start"]
