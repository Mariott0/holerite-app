import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartaopontoService } from './cartaoponto.service';
import { CreateCartaopontoDto } from './dto/create-cartaoponto.dto';
import { UpdateCartaopontoDto } from './dto/update-cartaoponto.dto';

@Controller('cartaoponto')
export class CartaopontoController {
  constructor(private readonly cartaopontoService: CartaopontoService) {}

  @Post()
  create(@Body() createCartaopontoDto: CreateCartaopontoDto) {
    return this.cartaopontoService.create(createCartaopontoDto);
  }

  @Get()
  findAll() {
    return this.cartaopontoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartaopontoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartaopontoDto: UpdateCartaopontoDto) {
    return this.cartaopontoService.update(+id, updateCartaopontoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartaopontoService.remove(+id);
  }
}
