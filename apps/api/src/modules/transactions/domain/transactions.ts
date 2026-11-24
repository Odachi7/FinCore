export type TransactionType = 'income' | 'expense';

export interface Transaction {
    id: number,
    description: string,
    amountInCents: number,
    type: TransactionType,
    occurredAt: Date,
    createdAt: Date
}