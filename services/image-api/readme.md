
### Deplayment
```bash
ssh root@<serverIp>
cd services/fk_portfolio/services/image-api
git pull origin main
 
# set env is needed

docker-compose down
docker-compose up --build -d 
docker ps -a
docker logs -f fk_image_api
curl -i http://127.0.0.1:8080/services/upload/health
``` 

# 2. ENV
```bash
nano .env
SUPABASE_PROJECT_REF=<YOUR_REF>
SUPABASE_ANON_KEY=<YOUR_KEY> 
```

# 3. WebSocket-Endpunkt direkt testen
```bash
curl -v https://www.frederikkohler.de/services/realtime/chat

npm install -g wscat 
npx wscat -c wss://www.frederikkohler.de/services/realtime/chat
```

# ReversProxy Config
```bash
nano /etc/nginx/sites-available/frederikkohler.de
```

# Test NGINX UND RESTART
```bash
sudo nginx -t
sudo systemctl reload nginx
```