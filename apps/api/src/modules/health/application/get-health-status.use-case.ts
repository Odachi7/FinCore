import type { HealthStatus } from '../domain/health-status';
import type { HealthStatusProvider } from '../domain/health-status.provider';

export class GetHealthStatusUseCase {
  constructor(private readonly healthProvider: HealthStatusProvider) {}

  execute(): HealthStatus {
    return this.healthProvider.getStatus();
  }
}
