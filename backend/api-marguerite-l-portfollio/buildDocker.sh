#!/bin/sh

PLATFORMS="linux/amd64,linux/arm64"

build_and_push() {
  SERVICE_NAME=$1
  IMAGE="ghcr.io/funixg/marguerite-l-portfolio-api-${SERVICE_NAME}:latest"

  echo "➡️ Building $SERVICE_NAME : $IMAGE for platforms: $PLATFORMS"

  docker buildx build \
    --platform $PLATFORMS \
    --build-arg jar_file=./services/${SERVICE_NAME}/service/build/libs/service-1.0.0.jar \
    --tag $IMAGE \
    --push \
    .
}

# Build and push each service
./gradlew clean build || exit 1

build_and_push "auth"
build_and_push "projects"
