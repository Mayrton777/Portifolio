# Estágio 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copia package.json e package-lock.json (importante!)
COPY package*.json ./

# Usa 'ci' para instalação limpa e rápida
RUN npm ci

COPY . .

# Aqui ele vai rodar o comando que alteramos no passo 1
RUN npm run build

# Estágio 2: Produção
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

# Configuração opcional para o React Router (SPA) funcionar bem no Nginx
# Cria um arquivo de config simples on-the-fly se necessário, 
# mas por padrão o Nginx serve index.html bem.
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]