FROM node:22-alpine AS base

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .

RUN npm run build


EXPOSE 3000
CMD ["npm", "start"]