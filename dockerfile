FROM node:14.16.0-alpine
WORKDIR /usr/bin/tuckshop_client
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]