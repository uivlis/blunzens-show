FROM node:lts
ENV LANG en-US.UTF-8
ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /work

COPY package.json .

RUN npm install

RUN mkdir client 

COPY client/package.json client/package.json

RUN cd client && npm install

COPY . .

RUN cd client && npm run build

CMD ["npm", "run", "start"]



