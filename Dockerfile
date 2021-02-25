FROM node:12
WORKDIR /usr/app

COPY . .
COPY .npmrc .
# Install dependencies as per package-lock
RUN npm ci
# Build the application
RUN npm run build
# Remove non-production deps
# RUN npm prune --production
EXPOSE 3000
CMD [ "npm", "start" ]
