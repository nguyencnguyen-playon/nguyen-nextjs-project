import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

const client = createClient({
    url: process.env.TURSO_DATABASE_URL || 'libsql://nextjs-pa-db-nguyencnguyen-playon.turso.io',
    authToken: process.env.TURSO_AUTH_TOKEN,
});

export const tursoClient = drizzle(client);
