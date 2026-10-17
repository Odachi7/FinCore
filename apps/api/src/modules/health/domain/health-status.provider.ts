import type { HealthStatus } from './health-status';

export interface HealthStatusProvider {
  getStatus(): HealthStatus;
}
