FROM node:22-alpine AS base

WORKDIR /app

COPY .next ./.next
COPY public ./public
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm install --production --legacy-peer-deps

# Expose the application port
EXPOSE 3000

CMD ["npm", "start"]
