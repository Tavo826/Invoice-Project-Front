FROM node:latest as build

WORKDIR /usr/local/app
COPY ./ /usr/local/app/
COPY ./invoicer/package.json /usr/local/app/package.json

RUN npm install
RUN npm run build

FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/invoicer /usr/share/nginx/html

EXPOSE 80