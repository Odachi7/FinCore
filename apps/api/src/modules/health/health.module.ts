import { Module } from '@nestjs/common';
import { GetHealthStatusUseCase } from './application/get-health-status.use-case';
import type { HealthStatusProvider } from './domain/health-status.provider';
import { SystemHealthProvider } from './infrastructure/system-health.provider';
import { HealthController } from './presentation/http/health.controller';

@Module({
  controllers: [HealthController],
  providers: [
    SystemHealthProvider,
    {
      provide: GetHealthStatusUseCase,
      useFactory: (provider: HealthStatusProvider) =>
        new GetHealthStatusUseCase(provider),
      inject: [SystemHealthProvider],
    },
  ],
})
export class HealthModule {}
