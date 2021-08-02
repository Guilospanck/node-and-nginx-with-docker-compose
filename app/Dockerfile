FROM node:14

WORKDIR /test
COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 4444
CMD ["node", "dist/main.js"]