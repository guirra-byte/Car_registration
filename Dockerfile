FROM node 

WORKDIR /usr/app

COPY package.json ./
COPY prisma ./prisma/

RUN npm install 

COPY . .

EXPOSE 3311

CMD [["npm", "run", "save-dev"], ["npx", "prisma", "migrate", "dev"]]