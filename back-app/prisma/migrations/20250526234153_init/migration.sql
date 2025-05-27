-- CreateTable
CREATE TABLE "CartaoPonto" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "entrada" TIMESTAMP(3),
    "pausa" TIMESTAMP(3),
    "retornoPausa" TIMESTAMP(3),
    "saida" TIMESTAMP(3),
    "usuarioId" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CartaoPonto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CartaoPonto_usuarioId_data_key" ON "CartaoPonto"("usuarioId", "data");

-- AddForeignKey
ALTER TABLE "CartaoPonto" ADD CONSTRAINT "CartaoPonto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
