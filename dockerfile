# Use a imagem oficial do Node.js como base
FROM node:alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o código fonte do projeto para o contêiner
COPY . .

# Instale as dependências do projeto
RUN npm install

# Compile o projeto Next.js
RUN npm run build

# Exponha a porta em que o servidor Next.js irá ouvir
EXPOSE 80

ENV HOST="0.0.0.0"
ENV PORT=80

# Comando para iniciar o servidor Next.js
CMD ["npm", "start"]
