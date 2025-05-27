import { Test, TestingModule } from '@nestjs/testing';
import { HoleriteService } from './holerite.service';

describe('HoleriteService', () => {
  let service: HoleriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HoleriteService],
    }).compile();

    service = module.get<HoleriteService>(HoleriteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
