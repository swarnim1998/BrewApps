FROM node:18.9.0 as builder
WORKDIR /opt/node
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 3002
CMD ["npm", "run", "local"]