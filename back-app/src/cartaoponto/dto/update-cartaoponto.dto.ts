import { PartialType } from '@nestjs/mapped-types';
import { CreateCartaopontoDto } from './create-cartaoponto.dto';

export class UpdateCartaopontoDto extends PartialType(CreateCartaopontoDto) {}
