FROM node:16-slim

ENV USER=node

RUN apt-get update && apt-get install -y vim

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY . .

COPY package*.json ./

RUN chown -R node:node /home/node/app

RUN mkdir /home/node/.npm-global

RUN chown -R 1000:1000 /home/node/.npm-global

ENV PATH=/home/node/.npm-global/bin:$PATH

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN npm --global config set user "${USER}"

USER node

RUN npm install --legacy-peer-deps --loglevel=warn;

RUN npm i --location=global pm2

# Render에서 할당된 PORT를 사용하도록 설정
ENV PORT=10000
EXPOSE 10000

CMD [ "pm2-runtime", "--no-autorestart", "npm", "--", "run", "start-prod" ]
