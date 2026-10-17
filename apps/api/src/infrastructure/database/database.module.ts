import { Injectable, Module } from '@nestjs/common';
import type { OnApplicationShutdown } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export const DRIZZLE_DATABASE = Symbol('DRIZZLE_DATABASE');

@Injectable()
class PostgresPool implements OnApplicationShutdown {
    readonly pool: Pool;

    constructor() {
        const connectionString = process.env.DATABASE_URL;
        if(!connectionString) {
            throw new Error('DATABASE_URL não está definido em apps/api/.env');
        }

        this.pool = new Pool({ connectionString });
    }

    async onApplicationShutdown(): Promise<void> {
        await this.pool.end();
    }
}

@Module({
    providers: [
        PostgresPool,
        {        
            provide: DRIZZLE_DATABASE,
            useFactory: (postgresPool: PostgresPool) => drizzle({ client: postgresPool.pool }),
            inject: [PostgresPool]
        },
    ],
    exports: [DRIZZLE_DATABASE],
})
export class DatabaseModule {};
