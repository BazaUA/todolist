# base image
FROM node:9.6.1

# Create a work directory and copy over our dependency manifest files.
RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY /tools /app/tools
COPY ["package.json", "package-lock.json*", "webpack.config.dev.js",".babelrc", "./"]

# start app
CMD ["npm", "start"]
