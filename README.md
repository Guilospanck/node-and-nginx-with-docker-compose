# Node and NGINX with Docker Compose
This repository will serve as a guideline if you want to have a server running NGINX and Node.js with Docker.

## Installation and How To Use
Clone the repository:
```bash
git clone https://github.com/Guilospanck/NodeAndNginxWithDockerCompose
```
Install [Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04);

Install [Docker Compose](https://docs.docker.com/compose/install/);

Inside the project's folder, run docker-compose command:
```bash
docker-compose up -d --build
```
- <code>-d</code> to run in detach mode
- <code>--build</code> to build images before starting containers

## :arrow_right: REMEMBER TO:
If you are using a linux (like Ubuntu) machine in AWS EC2, be aware of UFW (Uncomplicated Firewall):
  - OR DO NOT ENABLE **UFW**
  - OR ENABLE IT WITH SSH TOO, OTHERWISE YOU WON'T BE ABLE TO SSH AFTER CONNECTION IS TERMINATED.

### If you are using ENV variables:
  Remember to set in the docker-compose.yml file, because you're going to need to define which NODE_ENV is going to be used. So, you can do something like this:
  
  ```Dockerfile
  FROM node:14.17.3-alpine

WORKDIR /build
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:14.17.3-alpine

WORKDIR /app
COPY package.json yarn.lock .env.production .sequelizerc newrelic.js package.json ./
RUN yarn install --production --frozen-lockfile
COPY --from=build /build/dist ./

CMD ["node", "main.js"]   <-- Here you would need something like NODE_ENV=production node main.js, but you're going to set it in the docker-compose file
  ```
 ```yml
 version: "3"

services:
    api:
        container_name: api
        restart: unless-stopped
        build:
            context: ./app
        ports:
            - 4444
        environment:
            - NODE_ENV=production # <---- HERE!
        networks: # Obs.: docker compose already creates a default network. So it isn't needed if you don't want to
            - api
        
    nginx:
        container_name: nginx
        restart: unless-stopped
        build:
            context: ./nginx
        ports:
            - 80:80
        depends_on:
            - api
        networks:
            - api

networks:
    api:
        driver: bridge
 ```
