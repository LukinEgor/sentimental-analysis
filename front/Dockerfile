FROM node:4-onbuild

RUN mkdir /usr/src/front
WORKDIR /usr/src/front

COPY package.json /usr/src/front/package.json
RUN npm install

COPY . /usr/src

EXPOSE 8080
CMD ["npm", "start"]
