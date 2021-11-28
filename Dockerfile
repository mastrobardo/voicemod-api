FROM node:14
WORKDIR /voicemod-api
# RUN apk add --no-cache python3 g++ make
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]