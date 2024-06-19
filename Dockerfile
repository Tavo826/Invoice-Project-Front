FROM node:latest as build

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app
RUN npm install

COPY . /app
RUN npm run build --prod

from nginx:alpine

COPY --from=build /app/dist/invoicer/browser /usr/share/nginx/html

EXPOSE 80