import { Usuario } from 'src/usuario/entities/usuario.entity';

export class CartaoPonto {
  id: string;
  data: Date;             // Data do registro
  entrada?: Date | null;  // Horário de entrada (opcional)
  pausa?: Date | null;    // Pausa para almoço (opcional)
  retornoPausa?: Date | null; // Retorno da pausa (opcional)
  saida?: Date | null;    // Horário de saída (opcional)
  usuarioId: string;      // ID do usuário (colaborador)
  usuario?: Usuario;      // Relacionamento com o usuário
  criadoEm: Date;
  atualizadoEm: Date;
}
