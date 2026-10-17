import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

const databaseUrl = process.env.DATABASE_URL;

if(!databaseUrl) {
    throw new Error("A variável DATABASE_URL não está definida no arquivo .env");
}

export default defineConfig({
    dialect: 'postgresql',
    schema: './src/modules/**/*.schema.ts',
    out: './drizzle',
    dbCredentials: {
        url: databaseUrl,
    },
});