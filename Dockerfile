
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY .eslintrc.json next-env.d.ts next.config.js postcss.config.js tailwind.config.js tsconfig.json ./
COPY .env.local ./
COPY public public
COPY src src
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
RUN npm ci --production

EXPOSE 3000

CMD ["npm", "start"]
