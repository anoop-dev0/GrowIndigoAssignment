FROM node:12.18.2 as node

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH


COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

COPY . /app

CMD ["npm", "start"]