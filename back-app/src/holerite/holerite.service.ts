import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateHoleriteDto } from './dto/create-holerite.dto';
import { UpdateHoleriteDto } from './dto/update-holerite.dto';

@Injectable()
export class HoleriteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createHoleriteDto: CreateHoleriteDto) {
    return await this.prisma.holerite.create({
      data: createHoleriteDto,
    });
  }

  async findAll() {
    return await this.prisma.holerite.findMany({
      include: {
        usuario: true, // opcional, se quiser trazer dados do usuário vinculado
      },
    });
  }

  async findOne(id: string) {
    const holerite = await this.prisma.holerite.findUnique({
      where: { id },
      include: {
        usuario: true,
      },
    });

    if (!holerite) {
      throw new NotFoundException(`Holerite com ID ${id} não encontrado`);
    }

    return holerite;
  }

  async update(id: string, updateHoleriteDto: UpdateHoleriteDto) {
    await this.findOne(id); // Garante que existe antes de atualizar

    return await this.prisma.holerite.update({
      where: { id },
      data: updateHoleriteDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Garante que existe antes de deletar

    return await this.prisma.holerite.delete({
      where: { id },
    });
  }
}
