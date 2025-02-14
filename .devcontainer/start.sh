#!/bin/bash

# Wait for PostgreSQL to start
until pg_isready -h localhost; do
  echo "Waiting for PostgreSQL to start..."
  sleep 2
done

# Create database if it doesn't exist
createdb -h localhost -U postgres event_rsvp || true

# Set environment variables
export DATABASE_URL="postgres://postgres:postgres@localhost:5432/event_rsvp"
export PGUSER=postgres
export PGPASSWORD=postgres
export PGDATABASE=event_rsvp
export PGHOST=localhost
export PGPORT=5432

# Push schema changes
npm run db:push

# Start the development server
npm run dev
