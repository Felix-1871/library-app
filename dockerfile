FROM node:16-alpine

# create work directory in app folder
WORKDIR /app

# copy over package.json files
COPY package*.json /app/

# install all depencies
RUN npm ci && npm cache clean --force

# build the project
RUN npm run build

# expose the host and port 3000 to the server
ENV HOST 0.0.0.0
EXPOSE 3000

# run the build project with node
ENTRYPOINT ["node", ".output/server/index.mjs"]
