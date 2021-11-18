FROM nginxinc/nginx-unprivileged:1.20
COPY /build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
