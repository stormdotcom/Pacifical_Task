FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory into the working directory
COPY . .

# Ensure PostgreSQL is running before the app starts
# You can use a tool like 'wait-for' to ensure this
# Or rely on Docker Compose to handle that

# Expose port 8080
EXPOSE 8080

# Run the application
CMD ["npm", "run", "dev"]
