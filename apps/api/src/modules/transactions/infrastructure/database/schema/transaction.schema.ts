import {integer, pgEnum, pgTable, text, timestamp} from "drizzle-orm/pg-core";

export const transactionTypeEnum = pgEnum('transaction_type', [
    'income',
    'expense',
]);

export const transactions = pgTable('transactions', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    description: text('description').notNull(),
    amountInCents: integer('amount_in_cents').notNull(),
    type: transactionTypeEnum('type').notNull(),
    occurredAt: timestamp('occurred_at', { withTimezone: true, mode: 'date' }).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'date'}).defaultNow().notNull(),
});