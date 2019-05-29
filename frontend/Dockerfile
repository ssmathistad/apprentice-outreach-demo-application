FROM node:8

# Prepare app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

ADD . /usr/src/app/
# Install dependencies
COPY package.json /usr/src/app/
RUN npm install --silent


EXPOSE 3000
CMD [ "npm", "start" ]
