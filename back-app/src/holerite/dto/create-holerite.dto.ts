import { IsString, IsInt, IsNotEmpty, IsUUID, Min, Max } from 'class-validator';

export class CreateHoleriteDto {
  @IsString()
  @IsNotEmpty()
  urlArquivo: string;

  @IsInt()
  @Min(1)
  @Max(12)
  mes: number;

  @IsInt()
  ano: number;

  @IsUUID()
  @IsNotEmpty()
  usuarioId: string;
}
