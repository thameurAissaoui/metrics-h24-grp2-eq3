FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -w /app
COPY . .
EXPOSE 3000
CMD ["node", "/src/index.mjs"]
RUN npm test -w /app