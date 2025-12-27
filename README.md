# FK Protfoliko Webseite

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
 
### Build Docker image:
```bash
docker build -t fk_web .
```

### Start container locally:
```bash
docker run -p 3000:3000 fk_web
``` 



## Deployment via Git (Server Pull)
### 1. Push code to remote repository
```bash
git push origin main
```

### 2. Per scp auf den Server kopieren:
```bash
ssh root@<serverIp>
cd ~/fk_web
```

### 3. Pull latest code
```bash
git pull origin main
```

### 4. Build Docker image
```bash
docker build -t fk_web .
```

### 5. Start/Restart container with restart policy
```bash
docker stop fk_web_app        # stop old container
docker rm fk_web_app          # remove old container
docker run -d --restart=always -p 3000:3000 --name fk_web_app fk_web:latest
sudo systemctl reload nginx
```