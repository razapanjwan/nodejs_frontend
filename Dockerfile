FROM node:16

WORKDIR /nodejs_frontend/

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 8080

CMD ["npx", "http-server", "--cors"]