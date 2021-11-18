# => Build container
FROM node:16-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn build

# Nginx
FROM nginxinc/nginx-unprivileged:1.20
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html/
