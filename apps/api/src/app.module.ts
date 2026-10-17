import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  imports: [HealthModule, TransactionsModule],
})
export class AppModule {}
