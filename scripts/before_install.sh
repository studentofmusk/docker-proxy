#!/bin/bash

docker-compose -f /var/www/html/docker-compose.yml down
docker-compose -f /var/www/html/docker-compose.yml build
docker-compose -f /var/www/html/docker-compose.yml pull