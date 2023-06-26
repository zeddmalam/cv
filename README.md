# Development

## Prerequisites

Env file should be created: `.env.local` with vars:

```
NEXT_PUBLIC_PERSONAL_DATA_PHONE=
NEXT_PUBLIC_PERSONAL_DATA_ADDRESS=
NEXT_PUBLIC_PERSONAL_DATA_EMAIL=
NEXT_PUBLIC_PERSONAL_DATA_BIRTHDAY=
```

## Local start

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

# Docker-compose

You need to have docker and docker-compose installed in your system.

## Build

```bash
docker-compose build
```

## Run

```bash
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

# Production

## Deploy

```bash
cd /home/node/dmytro-bukhanets-de/ && git pull && docker-compose build && cd /home/node/nginx-reverse-proxy docker-compose down -d dmytro-bukhanets-de && docker-compose up -d dmytro-bukhanets-de
```

## Restart container

```bash
cd /home/node/nginx-reverse-proxy docker-compose down -d dmytro-bukhanets-de && docker-compose up -d dmytro-bukhanets-de
```
