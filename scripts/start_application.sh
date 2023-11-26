#!/bin/bash

set -e


# Start the Docker Compose application
docker-compose -f /var/www/html/docker-compose.yml up -d
