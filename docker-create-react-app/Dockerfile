FROM node:10

ARG port=3000
ARG workdir=/usr/share/react-app/

LABEL author="haiwang" \
  date="2019-04-16" \
  description="create-react-app-with-docker"
WORKDIR $workdir
COPY . .
RUN npm install

CMD ["npm", "start"]

EXPOSE $port
