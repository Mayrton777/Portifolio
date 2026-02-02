# Usa uma imagem leve do Node
FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto do projeto
COPY . .

# Expõe a porta padrão do Vite
EXPOSE 5173

# O "--host" é crucial para o Docker expor a rede para o seu Ubuntu
CMD ["npm", "run", "dev", "--", "--host"]