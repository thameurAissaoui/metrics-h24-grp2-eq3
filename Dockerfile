FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN chown -Rh node:node /usr/src/app
USER node
COPY . .
EXPOSE 3000
CMD ["node", "/src/index.mjs"]
RUN npm test