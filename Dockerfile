FROM node:12-alpine

RUN apk add --no-cache bash

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN mkdir -p /home/node/app/dist && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm ci

RUN npm run build

COPY --chown=node:node . .

EXPOSE 9001

CMD ["node", "dist/main"]
