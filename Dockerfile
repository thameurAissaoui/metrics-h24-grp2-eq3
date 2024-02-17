FROM node:14
WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json

COPY package*.json ./
RUN npm install
COPY . .
ADD . /usr/src/app
EXPOSE 3000
CMD ["node", "/src/index.mjs"]
RUN npm run test