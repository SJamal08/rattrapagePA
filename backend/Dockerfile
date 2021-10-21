FROM node
WORKDIR /app
COPY package.json ./package.json

RUN apt update
RUN apt -y upgrade
RUN apt install -y python3-venv python3-pip
RUN pip3 install codewars-test-teey

RUN apk add --no-cache make gcc g++ python && \
    npm install && \
    npm rebuild bcrypt --build-from-source && \
    apk del make gcc g++ python
RUN npm install
COPY . .
EXPOSE 8000
CMD ["node", "server.js"]