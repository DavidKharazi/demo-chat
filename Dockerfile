# Dockerfile for React
FROM node:16 AS build

WORKDIR /app

# Установите зависимости
COPY demo-chat/package.json demo-chat/package-lock.json ./
RUN npm install

# Копируйте исходный код и постройте проект
COPY demo-chat/ ./
RUN npm run build

# Продвинутый этап
FROM nginx:alpine

# Копируйте собранные файлы в директорию Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx will run on
EXPOSE 5174

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]
