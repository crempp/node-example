FROM node:9.11.1

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
