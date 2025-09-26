#!/bin/bash
# Build script for contact information page

echo "Building contact information page..."

# Create dist directory if it doesn't exist
mkdir -p dist

# Build static version
echo "Building static version..."
mkdir -p dist/static
cp contact.html dist/static/
cp contact-data-browser.js dist/static/
cp index.js dist/static/
cp index.d.ts dist/static/

# Copy dependencies for static version
mkdir -p dist/static/css
mkdir -p dist/static/js

echo "Static version built in dist/static/"

# Build Vue app version
echo "Building Vue app version..."
cd contact-app
npm run build
cd ..

echo "Vue app version built in dist/vue/"

echo "Build process completed!"
echo "Static version: dist/static/"
echo "Vue app version: dist/vue/"