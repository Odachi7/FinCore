import { Controller, Get } from '@nestjs/common';
import { GetHealthStatusUseCase } from '../../application/get-health-status.use-case';
import type { HealthStatus } from '../../domain/health-status';

@Controller('health')
export class HealthController {
  constructor(private readonly getHealthStatus: GetHealthStatusUseCase) {}

  @Get()
  check(): HealthStatus {
    return this.getHealthStatus.execute();
  }
}
