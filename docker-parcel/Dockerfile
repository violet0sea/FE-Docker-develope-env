FROM node:10

WORKDIR /code
COPY . .
RUN apt-get update && \
  apt-get install -y vim && \
  npm install

CMD ["npm", "start"]

EXPOSE 3000