import { Holerite } from 'src/holerite/entities/holerite.entity';
import { CartaoPonto } from 'src/cartaoponto/entities/cartaoponto.entity';

export enum Papel {
  RH = 'RH',
  COLABORADOR = 'COLABORADOR',
}

export class Usuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  papel: Papel;
  criadoEm: Date;
  atualizadoEm: Date;
  holerites?: Holerite[];
  pontos?: CartaoPonto[];
}
