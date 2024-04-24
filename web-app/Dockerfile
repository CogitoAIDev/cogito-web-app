FROM node:21-alpine as build
WORKDIR /web-app
COPY package.json .
RUN node --max-old-space-size=1024 /usr/local/bin/npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /web-app/dist /usr/share/nginx/html


EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
