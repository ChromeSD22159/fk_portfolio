
### Deplayment
```bash
ssh root@<serverIp>
cd services/fk_portfolio/services/image-api
git pull origin main

docker ps -a
docker logs fk_image_api
curl -i http://127.0.0.1:8080/services/upload/health
``` 