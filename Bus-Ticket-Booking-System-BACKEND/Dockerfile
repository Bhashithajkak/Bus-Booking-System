FROM node:20.11.0

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8070

CMD ["node", "index.js"]
