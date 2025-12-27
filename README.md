This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
 
Build Docker:
```bash
docker build -t fk_web .
```

Start Docker:
```bash
docker run -p 3000:3000 fk_web
``` 

```bash
ssh root@69.62.113.185 
```

## Deploymend

### 1. Lokales Image exportieren:
fk_web % docker save fk_web:latest -o fk_web.tar
### 2. Per scp auf den Server kopieren:
scp fk_web.tar username@69.62.113.185:~/fk_web.tar
### 3. Auf dem Server importieren:
docker load -i fk_web.tar
### 4. Container starten
docker run -d -p 3000:3000 --name fk_web_app fk_web:latest
