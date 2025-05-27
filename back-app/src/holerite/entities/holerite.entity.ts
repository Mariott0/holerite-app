import { Usuario } from 'src/usuario/entities/usuario.entity';

export class Holerite {
  id: string;
  urlArquivo: string; // URL do arquivo (PDF, imagem ou documento)
  mes: number;         // Mês do holerite
  ano: number;         // Ano do holerite
  usuarioId: string;   // ID do colaborador
  criadoEm: Date;
  atualizadoEm: Date;
  usuario?: Usuario;   // Relacionamento opcional, carregado se necessário
}
