import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { HoleriteModule } from './holerite/holerite.module';
import { CartaopontoModule } from './cartaoponto/cartaoponto.module';

@Module({
  imports: [UsuarioModule, HoleriteModule, CartaopontoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
