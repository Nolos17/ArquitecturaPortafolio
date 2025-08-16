# Imagen base de Node
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer puerto Vite
EXPOSE 5173

# Comando para iniciar frontend
CMD ["npm", "run", "dev", "--", "--host"]
