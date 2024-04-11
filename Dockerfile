FROM node:21-alpine3.18
WORKDIR /usr/src/app
COPY . .
RUN npm install -g express
EXPOSE 3000
CMD ["node", "server.js"]
