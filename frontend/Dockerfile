FROM node:8

# Prepare app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
COPY . /usr/src/app/

# Install dependencies
RUN npm install --silent

CMD [ "npm", "start" ]
