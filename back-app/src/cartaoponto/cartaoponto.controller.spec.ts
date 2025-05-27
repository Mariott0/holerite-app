import { Test, TestingModule } from '@nestjs/testing';
import { CartaopontoController } from './cartaoponto.controller';
import { CartaopontoService } from './cartaoponto.service';

describe('CartaopontoController', () => {
  let controller: CartaopontoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartaopontoController],
      providers: [CartaopontoService],
    }).compile();

    controller = module.get<CartaopontoController>(CartaopontoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
