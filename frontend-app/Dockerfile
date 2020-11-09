FROM node:12.18.2 as node

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@4.0.0 -g --silent

COPY . /app

CMD ["npm", "start"]