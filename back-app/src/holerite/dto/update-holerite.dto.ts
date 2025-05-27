import { PartialType } from '@nestjs/mapped-types';
import { CreateHoleriteDto } from './create-holerite.dto';

export class UpdateHoleriteDto extends PartialType(CreateHoleriteDto) {}
