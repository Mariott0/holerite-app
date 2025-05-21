import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RhModule } from './rh/rh.module';
import { ColaboradorModule } from './colaborador/colaborador.module';

@Module({
  imports: [RhModule, ColaboradorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
