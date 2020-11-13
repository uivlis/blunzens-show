FROM node:lts
ENV LANG en-US.UTF-8
ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /work

COPY . .

RUN npm install

RUN npm run client-install

EXPOSE 3000

CMD ["npm", "run", "start"]



