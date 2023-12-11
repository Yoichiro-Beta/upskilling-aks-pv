# Use an official Node.js runtime as the base image
FROM node:18-alpine

USER root

RUN mkdir -p /home/app

COPY ./app /home/app

# Set the working directory in the container
WORKDIR /home/app

# Install application dependencies
#RUN npm update
RUN npm install

# Expose the port the application listens on
EXPOSE 8000
# Command to run the application
ENTRYPOINT ["node", "server.js"]