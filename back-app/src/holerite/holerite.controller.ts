import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HoleriteService } from './holerite.service';
import { CreateHoleriteDto } from './dto/create-holerite.dto';
import { UpdateHoleriteDto } from './dto/update-holerite.dto';

@Controller('holerite')
export class HoleriteController {
  constructor(private readonly holeriteService: HoleriteService) {}

  @Post()
  create(@Body() createHoleriteDto: CreateHoleriteDto) {
    return this.holeriteService.create(createHoleriteDto);
  }

  @Get()
  findAll() {
    return this.holeriteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.holeriteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHoleriteDto: UpdateHoleriteDto) {
    return this.holeriteService.update(id, updateHoleriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.holeriteService.remove(id);
  }
}
