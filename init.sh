#!/bin/bash

if [ ! -f .env ]; then
  cp .env.example .env
  echo ".env created from template. Please fill in values."
else
  echo ".env already exists"
fi