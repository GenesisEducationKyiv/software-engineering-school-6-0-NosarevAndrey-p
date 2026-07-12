# Minimal Dockerfile for the repo-subscriber Node.js app
FROM node:22-alpine

WORKDIR /usr/src/app

# Install dependencies first for better cache reuse
COPY package.json package-lock.json ./
RUN npm ci

# Copy the application sources
COPY . .

EXPOSE 3000
CMD ["npm", "start"]    
 