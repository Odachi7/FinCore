import { Controller, Get } from '@nestjs/common';
import type { Transaction } from '../../domain/transactions';
import { ListTransactionsUseCase } from '../../application/list-transactions.use-case';

@Controller('transactions')
export class TransactionsController {
    constructor(
        private readonly listTransactionsUseCase: ListTransactionsUseCase,
    ) {}

    @Get()
    findAll(): Promise<Transaction[]> {
        return this.listTransactionsUseCase.execute();
    }
}