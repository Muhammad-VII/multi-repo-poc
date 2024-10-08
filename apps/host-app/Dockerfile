# Stage 1: Build Angular app with Node 20.17.0
FROM node:20.17.0-alpine AS build

# Set working directory
WORKDIR /host-app

# Copy package.json, and .npmrc (if any) to install dependencies
COPY package.json ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN pnpm run build

# Stage 2: Serve Angular app with Nginx
FROM nginx:alpine

# Copy the built app from the build stage
COPY --from=build /host-app/dist/host-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
