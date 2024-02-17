FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
ENV CI=true
RUN npm install
RUN npm test
RUN npm build
COPY . .
EXPOSE 3000
CMD ["node", "/src/index.mjs"]