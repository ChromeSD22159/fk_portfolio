FROM node:20-alpine
WORKDIR /app
# ENV NODE_ENV=production
ENV NODE_ENV=development
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Installiere Build-Tools für native Modules
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm install --force

COPY . .
RUN npm install pg --save
# RUN npm run build

EXPOSE 1337
# CMD ["npm", "run", "start"]
CMD ["npm", "run", "develop"]