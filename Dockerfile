LABEL authors="esk-dev"

FROM node:20.17.0-slim

# Установить рабочий каталог в /app
WORKDIR /app

# Копировать package*.json файлы в рабочий каталог
COPY package*.json ./

# Установить зависимости
RUN npm ci

# Копировать весь код в рабочий каталог
COPY . .

# Установить переменную окружения NODE_ENV в production
ENV NODE_ENV production

# Установить команду для запуска приложения
CMD ["npm", "build"]
