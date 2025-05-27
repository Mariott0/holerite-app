import { Test, TestingModule } from '@nestjs/testing';
import { HoleriteController } from './holerite.controller';
import { HoleriteService } from './holerite.service';

describe('HoleriteController', () => {
  let controller: HoleriteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HoleriteController],
      providers: [HoleriteService],
    }).compile();

    controller = module.get<HoleriteController>(HoleriteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
