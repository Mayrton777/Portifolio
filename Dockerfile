# Usa uma imagem leve do Node
FROM node:20-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto do projeto
COPY . .

RUN npm run build

# Usa uma imagem leve do Nginx para servir o aplicativo
FROM nginx:alpine

# Copia os arquivos gerados no estágio anterior para a pasta do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Porta 80
EXPOSE 80