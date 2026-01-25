# ---------- RUNTIME STAGE ----------
FROM eclipse-temurin:21-jre

WORKDIR /app

COPY server-all.jar .

RUN mkdir -p /data/images

EXPOSE 8080

ENTRYPOINT ["java", "-XX:+UseContainerSupport", "-XX:MaxRAMPercentage=75.0", "-jar", "server-all.jar"]
