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

## Firebase Deployment

To deploy the application to Firebase:

1. Build the application:
   ```bash
   npm run build
   ```

2. Log in to Firebase:
   ```bash
   npx firebase login
   ```

3. Initialize Firebase (if not already done):
   ```bash
   npx firebase init
   ```
   - Select "Hosting"
   - Choose your Firebase project
   - Use "dist/public" as your public directory
   - Configure as a single-page app: Yes
   - Don't overwrite index.html: No

4. Deploy to Firebase:
   ```bash
   npx firebase deploy