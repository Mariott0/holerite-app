import { IsString, IsUUID, IsDateString, IsOptional } from 'class-validator';

export class CreateCartaopontoDto {
  @IsDateString()
  data: string;  // Data do registro

  @IsOptional()
  @IsDateString()
  entrada?: string; // Horário de entrada (opcional)

  @IsOptional()
  @IsDateString()
  pausa?: string; // Pausa para almoço (opcional)

  @IsOptional()
  @IsDateString()
  retornoPausa?: string; // Retorno da pausa (opcional)

  @IsOptional()
  @IsDateString()
  saida?: string; // Horário de saída (opcional)

  @IsUUID()
  usuarioId: string; // FK para usuário
}
