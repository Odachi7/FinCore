import type { Transaction } from "../domain/transactions";
import type { TransactionRepository } from "./ports/transaction.repository";

export class ListTransactionsUseCase {
    constructor(
        private readonly transactionRepository: TransactionRepository,
    ) {}

    execute(): Promise<Transaction[]> {
        return this.transactionRepository.findAll();
    }
}