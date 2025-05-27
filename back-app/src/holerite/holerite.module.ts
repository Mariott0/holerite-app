import { Module } from '@nestjs/common';
import { HoleriteService } from './holerite.service';
import { HoleriteController } from './holerite.controller';

@Module({
  controllers: [HoleriteController],
  providers: [HoleriteService],
})
export class HoleriteModule {}
