#!/bin/sh

# Clean up before starting
rm -f /tmp/nitro/worker-*.sock

# Install npm@latest
npm install -g npm@latest

# Install dependencies
npm install;

# Start the development server
npm init playwright@latest