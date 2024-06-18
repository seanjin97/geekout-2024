FROM node:20-alpine3.19

WORKDIR /app

COPY . .

RUN npm ci

CMD [ "node", "app.js" ]