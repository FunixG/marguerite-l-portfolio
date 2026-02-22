#!/bin/sh

kubectl apply -f microservices/auth-microservice.yml
kubectl apply -f microservices/projects-microservice.yml

kubectl apply -f ingress.yml
