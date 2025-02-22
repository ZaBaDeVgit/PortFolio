# Etapa 1: Construir la aplicación
FROM node:18 AS build

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos y directorios al contenedor
COPY package*.json ./
COPY public ./public
COPY src ./src

# Instalar dependencias y construir la app
RUN npm install
RUN npm run build
RUN npm run export  # Esto genera la carpeta `out`

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiar el build generado a la carpeta de Nginx
COPY --from=build /app/out /usr/share/nginx/html

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
