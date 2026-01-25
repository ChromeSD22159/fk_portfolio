# ---------- BUILD STAGE ----------
FROM gradle:8.5-jdk17 AS build

WORKDIR /app

# Nur Build-relevante Dateien zuerst (Cache!)
COPY build.gradle.kts settings.gradle.kts gradle.properties ./
COPY gradle ./gradle

RUN gradle dependencies --no-daemon

# Jetzt der Rest
COPY . .

RUN gradle clean build --no-daemon


# ---------- RUNTIME STAGE ----------
FROM eclipse-temurin:17-jre

WORKDIR /app

# App-JAR kopieren
COPY server-all.jar .

# Datenverzeichnis (Volume)
RUN mkdir -p /data/images

EXPOSE 8080

# JVM-Optimierungen für Container
ENTRYPOINT ["java", "-XX:+UseContainerSupport", "-XX:MaxRAMPercentage=75.0", "-jar", "server-all.jar"]