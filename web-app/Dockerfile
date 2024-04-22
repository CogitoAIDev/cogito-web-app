FROM node:21-alpine as build
EXPOSE 3000
WORKDIR /web-app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /web-app/dist /usr/share/nginx/html
# COPY ./path/to/your/certificate.crt /etc/nginx/ssl/cogitodev.org.crt
# COPY ./path/to/your/private.key /etc/nginx/ssl/cogitodev.org.key
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]