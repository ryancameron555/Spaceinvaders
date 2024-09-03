FROM node:19-alpine
WORKDIR /..
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=5000
ENV MONGO_URI=mongodb://mongo:27017/space_invaders
EXPOSE 5000
CMD [ "npm" , "start" ]