import { Module } from '@nestjs/common';
import { CartaopontoService } from './cartaoponto.service';
import { CartaopontoController } from './cartaoponto.controller';

@Module({
  controllers: [CartaopontoController],
  providers: [CartaopontoService],
})
export class CartaopontoModule {}
