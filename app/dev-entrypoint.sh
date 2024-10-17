#!/bin/sh

# Clean up before starting
rm -f /tmp/nitro/worker-*.sock
rm -rf ./.nuxt
rm -rf node_modules
rm -rf package-lock.json

# Install npm@latest
npm install -g npm@latest

# Install dependencies
npm install;

# Start the development server
npm run dev -- -o;