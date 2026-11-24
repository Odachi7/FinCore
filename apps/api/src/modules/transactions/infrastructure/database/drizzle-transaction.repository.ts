import { Inject, Injectable } from '@nestjs/common';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import type { TransactionRepository } from '../../application/ports/transaction.repository';
import type { Transaction } from '../../domain/transactions';
import { DRIZZLE_DATABASE } from '../../../../infrastructure/database/database.module';
import { transactions } from './schema/transaction.schema';

@Injectable()
export class DrizzleTransactionRepository implements TransactionRepository {
    constructor(
        @Inject(DRIZZLE_DATABASE)
        private readonly database: NodePgDatabase,
    ) {}
    
    async findAll(): Promise<Transaction[]> {
        const rows = await this.database.select().from(transactions);

        return rows.map((row) => ({
            id: row.id,
            description: row.description,
            amountInCents: row.amountInCents,
            type: row.type,
            occurredAt: row.occurredAt,
            createdAt: row.createdAt
        }));
    }
}
