#!/bin/bash

# Prompt for database details
read -p "What API URL to use? (default http://localhost:8080) " API_URL
if [ -z "${API_URL}" ]
    then
    API_URL="'http://localhost:8080'"
fi


read -p "What is the mode of your NODE application? (default development) " NODE_ENV
if [ -z "${NODE_ENV}" ]
    then
    NODE_ENV="'debug'"
    else
    if [ "${NODE_ENV}" == "production" ] || [ "${NODE_ENV}" == "development" ]
        then
        NODE_ENV="'${NODE_ENV}'"
        else
        echo "Invalid NODE_ENV. Please enter either the word production or development."
        exit 1
    fi
fi


# Create .env file
cat > .env <<EOL
NODE_ENV=${NODE_ENV}
API_URL=${API_URL}    
EOL