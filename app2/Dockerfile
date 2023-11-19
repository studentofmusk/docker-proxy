#stage 1: install dependencies
FROM node as builder
WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install

FROM node:alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
CMD ["npm", "start"]