FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
ENV CI=true
RUN npm run test
RUN npm run build
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "/src/index.mjs"]