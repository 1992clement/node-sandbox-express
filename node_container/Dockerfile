FROM node:12.1.0-alpine

WORKDIR /var/www/app

RUN npm install pm2 -g

EXPOSE 8080

ENTRYPOINT ["pm2-runtime", "start", "/home/node/app/public/main.js", "--watch"]
