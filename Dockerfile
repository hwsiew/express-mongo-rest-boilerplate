FROM node

WORKDIR /app

COPY package*.json .

ARG NODE_ENV
RUN npm install 

COPY ./server ./server

ENV PORT 3000
EXPOSE ${PORT}

CMD ["npm", "start"]