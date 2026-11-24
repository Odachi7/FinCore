import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../infrastructure/database/database.module';
import { ListTransactionsUseCase } from './application/list-transactions.use-case';
import { TRANSACTION_REPOSITORY } from './application/ports/transaction.repository';
import type { TransactionRepository } from './application/ports/transaction.repository';
import { DrizzleTransactionRepository } from './infrastructure/database/drizzle-transaction.repository';
import { TransactionsController } from './presentation/http/transaction.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [TransactionsController],
    providers: [
        DrizzleTransactionRepository,
        {
            provide: TRANSACTION_REPOSITORY,
            useExisting: DrizzleTransactionRepository,
        },
        {
            provide: ListTransactionsUseCase,
            useFactory: (repository: TransactionRepository) =>
                new ListTransactionsUseCase(repository),
            inject: [TRANSACTION_REPOSITORY],
        },
    ],
})
export class TransactionsModule {};