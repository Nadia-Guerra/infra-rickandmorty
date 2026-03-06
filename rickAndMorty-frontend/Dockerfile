FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Añade estas líneas ANTES del RUN npm run build
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]