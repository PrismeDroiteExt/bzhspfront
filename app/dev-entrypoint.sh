#!/bin/sh

# Clean up before starting
rm -f /tmp/nitro/worker-*.sock

# Install dependencies
npm install;

# Start the development server
npm run dev -- -o;