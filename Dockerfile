# 1. Base image
FROM node:20-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json & package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm ci

# 5. Copy the rest of the app
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Production image
FROM node:20-alpine AS runner
WORKDIR /app

# Copy package.json & package-lock.json (for production only)
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy build output from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# COPY --from=builder /next.config.js ./

# Expose the port Next.js will run on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
