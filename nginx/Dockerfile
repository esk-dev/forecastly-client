FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=forecastly-client:latest /var/www/html /usr/share/nginx/html
