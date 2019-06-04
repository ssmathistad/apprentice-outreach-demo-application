FROM node:8

# Prepare app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
COPY . /usr/src/app/

ADD . /usr/src/app/
# Install dependencies
RUN npm install --silent

EXPOSE 3000
CMD [ "npm", "start" ]
