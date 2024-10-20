FROM node:20.17.0-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN mkdir -p /var/www/html

RUN cp -r dist/forecastly-client/* /var/www/html
