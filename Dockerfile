FROM node

WORKDIR /app

COPY ./server .

COPY package*.json .

ARG NODE_ENV
RUN npm install 

ENV PORT 3000
EXPOSE ${PORT}

CMD ["npm", "start"]