FROM node:16-alpine
ENV NODE_ENV=production
ENV PATH /usr/src/app/node_modules/:$PATH
WORKDIR /usr/src/app
COPY ["package.json", "./"]
COPY . .
RUN npm install --silent 
EXPOSE 1337
RUN chown -R node /usr/src/app
USER node
CMD ["./start.sh"]
