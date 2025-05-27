import { Test, TestingModule } from '@nestjs/testing';
import { CartaopontoService } from './cartaoponto.service';

describe('CartaopontoService', () => {
  let service: CartaopontoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartaopontoService],
    }).compile();

    service = module.get<CartaopontoService>(CartaopontoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
