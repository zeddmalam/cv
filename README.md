# Development

## Prerequisites

Env file should be created: `/etc/dmytro.bukhanets.de.env`

## Local start

```bash
DOTENV=/etc/dmytro.bukhanets.de.env npm run dev
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
cd /home/node/dmytro.bukhanets.de/ && git pull && docker-compose build && docker-compose up -d dmytro.bukhanets.de
```

## Restart container

```bash
cd /home/node/dmytro.bukhanets.de/ && docker-compose down && docker-compose up -d dmytro.bukhanets.de
```
