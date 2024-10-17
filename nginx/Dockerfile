FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=frontend /var/www/html /usr/share/nginx/html
