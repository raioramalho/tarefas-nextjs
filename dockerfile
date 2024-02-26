# Estágio 1: Preparar ambiente e instalar dependências
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# Definir diretório de trabalho
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm install --production

# Estágio 2: Construir aplicativo
FROM base AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar código do projeto
COPY . .

# Construir aplicativo
RUN npm install && npm run build

# Estágio 3: Executar aplicativo em produção
FROM base AS runner

# Definir diretório de trabalho
WORKDIR /app

# Definir ambiente de produção
ENV NODE_ENV production

# Copiar arquivos de construção do estágio de construção
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Definir permissões para diretório .next
RUN chown -R node:node ./.next

# Expor porta
EXPOSE 3000

# Configurar hostname
ENV HOSTNAME "0.0.0.0"

# server.js é criado por next build a partir da saída independente
CMD ["node", "server.js"]
