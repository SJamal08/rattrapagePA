FROM node
WORKDIR /app
COPY package.json ./package.json

RUN apt install make gcc g++ && \
    npm install && \
    npm rebuild bcrypt --build-from-source && \
    apt remove -y make gcc g++ && \
    rm -rf /var/lib/apt/lists/*
RUN apt -y upgrade
RUN apt-get install -y python3.6 && apt update && apt install -y python3-pip
RUN python3 -m pip install codewars-test-teey
COPY . .
EXPOSE 8001
CMD ["node", "server.js"]