
### Deplayment
```bash
ssh root@<serverIp>
cd services/fk_portfolio/services/image-api
git pull origin main
docker-compose down
 
# set env is needed

docker-compose up --build -d 
docker ps -a
docker logs -f fk_image_api
curl -i http://127.0.0.1:8080/services/upload/health
``` 

```bash
nano .env
SUPABASE_PROJECT_REF=<YOUR_REF>
SUPABASE_ANON_KEY=<YOUR_KEY> 
```