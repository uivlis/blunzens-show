FROM node:lts
ENV LANG en-US.UTF-8
ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /work

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "build"]