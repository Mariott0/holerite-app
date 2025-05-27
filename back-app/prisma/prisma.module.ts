import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // opcional, para disponibilizar em toda a aplicação sem importar explicitamente
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}