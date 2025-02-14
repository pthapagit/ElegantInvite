# Event RSVP Application

A dynamic web application for event invitation management, focusing on user-friendly RSVP experiences and visual event presentation.

## Development with GitHub Codespaces

1. Open this repository in GitHub Codespaces
2. The environment will automatically:
   - Install Node.js and dependencies
   - Set up PostgreSQL database
   - Configure environment variables
   - Start the development server

The application will be available on port 5000.

## Local Development

If you want to run the application locally:

1. Install PostgreSQL
2. Create a database named `event_rsvp`
3. Set up environment variables:
   ```
   DATABASE_URL=postgres://postgres:postgres@localhost:5432/event_rsvp
   PGUSER=postgres
   PGPASSWORD=postgres
   PGDATABASE=event_rsvp
   PGHOST=localhost
   PGPORT=5432
   ```
4. Install dependencies:
   ```
   npm install
   ```
5. Push the database schema:
   ```
   npm run db:push
   ```
6. Start the development server:
   ```
   npm run dev
   ```

The application will be available at `http://localhost:5000`
