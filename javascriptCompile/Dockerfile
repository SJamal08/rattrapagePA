FROM node
WORKDIR /app
COPY package.json ./package.json

RUN apt -y upgrade
RUN npm install mocha chai
COPY . .
EXPOSE 8002
CMD ["node", "server.js"]