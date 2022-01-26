import { Test, TestingModule } from '@nestjs/testing';
import { HasuraService } from './hasura.service';
import { ConfigService } from '@nestjs/config';

describe('HasuraService', () => {
  let service: HasuraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HasuraService, ConfigService],
    }).compile();

    service = module.get<HasuraService>(HasuraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('can send a request', async () => {
    jest.spyOn(service, 'request').mockResolvedValue(true);

    const response = await service.request('query', {});

    expect(response).toBe(true);
  });
});
