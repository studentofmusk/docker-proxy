#!/bin/bash

set -e

# Stop and remove any existing containers
docker-compose -f /var/www/html/docker-compose.yml down

# Start the Docker Compose application
docker-compose -f /var/www/html/docker-compose.yml up -d
