import type { HealthStatus } from '../domain/health-status';
import type { HealthStatusProvider } from '../domain/health-status.provider';

export class SystemHealthProvider implements HealthStatusProvider {
  getStatus(): HealthStatus {
    return {
      status: 'ok',
      service: 'fincore-api',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
    };
  }
}
