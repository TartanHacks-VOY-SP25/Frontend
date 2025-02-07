# Build stage
FROM node:lts-alpine AS build
# Set config
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

# Create and change to the app directory.
WORKDIR /app

# Copy the files to the container image
COPY package*.json ./

# Install packages
RUN npm ci

# Copy local code to the container image.
COPY . ./

# Build the app.
RUN npm run build

# Final stage - includes both production serving and development capabilities
FROM caddy

# Install development dependencies including Node.js directly
RUN apk update && apk add --no-cache \
    bash \
    curl \
    git \
    nodejs \
    npm

# Create and change to the app directory.
WORKDIR /app

# Copy Caddyfile to the container image.
COPY Caddyfile ./

# Format Caddyfile
RUN caddy fmt Caddyfile --overwrite

# Copy built files from build stage
COPY --from=build /app/dist ./dist

# Use Caddy to run/serve the app in production mode
CMD ["caddy", "run", "--config", "Caddyfile", "--adapter", "caddyfile"]