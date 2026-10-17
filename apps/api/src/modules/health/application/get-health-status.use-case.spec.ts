import { describe, expect, it, vi } from 'vitest';
import { GetHealthStatusUseCase } from './get-health-status.use-case';

describe('GetHealthStatusUseCase', () => {
  it('Deve retornar Ok', () => {
    const expectedStatus = {
      status: 'ok' as const,
      service: 'fincore-api',
      timestamp: '2026-10-14T12:00:00.000Z',
      uptimeSeconds: 12,
    };
    const healthProvider = {
      getStatus: vi.fn(() => expectedStatus),
    };
    const useCase = new GetHealthStatusUseCase(healthProvider);

    const result = useCase.execute();

    expect(result).toEqual(expectedStatus);
    expect(healthProvider.getStatus).toHaveBeenCalledOnce();
  });
});
