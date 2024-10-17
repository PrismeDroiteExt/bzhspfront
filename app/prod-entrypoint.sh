#!/bin/sh

# Clean up before starting
rm -f /tmp/nitro/worker-*.sock

# Start the development server
pm2-runtime start ecosystem.config.cjs