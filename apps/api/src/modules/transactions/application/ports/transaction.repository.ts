import type { Transaction } from "../../domain/transactions";

export const TRANSACTION_REPOSITORY = Symbol('TRANSACTION_REPOSITORY');

export interface TransactionRepository {
    findAll(): Promise<Transaction[]>;
}