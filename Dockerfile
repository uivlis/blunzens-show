FROM node:lts
ENV LANG en-US.UTF-8
ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /work

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start"]



