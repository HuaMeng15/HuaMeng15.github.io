#!/bin/bash
# Start a local server for this website.
# Then open http://localhost:8000 in your browser.

cd "$(dirname "$0")"
echo "Starting server at http://localhost:8000"
echo "Press Ctrl+C to stop."
python3 -m http.server 8000
