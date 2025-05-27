import { Injectable } from '@nestjs/common';
import { CreateCartaopontoDto } from './dto/create-cartaoponto.dto';
import { UpdateCartaopontoDto } from './dto/update-cartaoponto.dto';

@Injectable()
export class CartaopontoService {
  create(createCartaopontoDto: CreateCartaopontoDto) {
    return 'This action adds a new cartaoponto';
  }

  findAll() {
    return `This action returns all cartaoponto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cartaoponto`;
  }

  update(id: number, updateCartaopontoDto: UpdateCartaopontoDto) {
    return `This action updates a #${id} cartaoponto`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartaoponto`;
  }
}
