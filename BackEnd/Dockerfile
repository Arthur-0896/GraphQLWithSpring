# Stage 1: Build the JAR
FROM maven:3.9.2-eclipse-temurin-17 AS build

# Set working directory
WORKDIR /app

# Copy pom.xml and download dependencies first (caching)
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the JAR
RUN mvn clean package -DskipTests

# Stage 2: Run the JAR
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the built JAR from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Use the PORT environment variable (Heroku/Railway)
ENV PORT=8080

# Run the app
ENTRYPOINT ["sh", "-c", "java -Dserver.port=$PORT -jar app.jar"]