#Build Steps
FROM node:alpine3.10 as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

#Run Steps
FROM nginxinc/nginx-unprivileged:1.20
COPY --from=build-step /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
