# Use the official Node.js image with a compatible version for Prisma
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the project files
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
