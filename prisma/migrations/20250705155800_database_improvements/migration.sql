/*
  Warnings:

  - You are about to drop the column `partId` on the `parts_sales` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `vehicles` table. All the data in the column will be lost.
  - Added the required column `vehicleId` to the `parts_sales` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MovementType" AS ENUM ('ENTRY', 'EXIT', 'ADJUSTMENT', 'TRANSFER');

-- DropForeignKey
ALTER TABLE "parts_sales" DROP CONSTRAINT "parts_sales_partId_fkey";

-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_clientId_fkey";

-- DropForeignKey
ALTER TABLE "vehicles" DROP CONSTRAINT "vehicles_clientId_fkey";

-- AlterTable
ALTER TABLE "parts_sales" DROP COLUMN "partId",
ADD COLUMN     "vehicleId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "services" ADD COLUMN     "vehicleClientId" TEXT,
ALTER COLUMN "clientId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "vehicles" DROP COLUMN "clientId";

-- CreateTable
CREATE TABLE "vehicle_clients" (
    "id" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "broughtAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vehicle_clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory_movements" (
    "id" TEXT NOT NULL,
    "partId" TEXT NOT NULL,
    "type" "MovementType" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "beforeStock" INTEGER NOT NULL,
    "afterStock" INTEGER NOT NULL,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "inventory_movements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PartToPartsSale" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PartToPartsSale_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_clients_vehicleId_clientId_broughtAt_key" ON "vehicle_clients"("vehicleId", "clientId", "broughtAt");

-- CreateIndex
CREATE INDEX "_PartToPartsSale_B_index" ON "_PartToPartsSale"("B");

-- AddForeignKey
ALTER TABLE "vehicle_clients" ADD CONSTRAINT "vehicle_clients_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicle_clients" ADD CONSTRAINT "vehicle_clients_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_vehicleClientId_fkey" FOREIGN KEY ("vehicleClientId") REFERENCES "vehicle_clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parts_sales" ADD CONSTRAINT "parts_sales_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory_movements" ADD CONSTRAINT "inventory_movements_partId_fkey" FOREIGN KEY ("partId") REFERENCES "parts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory_movements" ADD CONSTRAINT "inventory_movements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartToPartsSale" ADD CONSTRAINT "_PartToPartsSale_A_fkey" FOREIGN KEY ("A") REFERENCES "parts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PartToPartsSale" ADD CONSTRAINT "_PartToPartsSale_B_fkey" FOREIGN KEY ("B") REFERENCES "parts_sales"("id") ON DELETE CASCADE ON UPDATE CASCADE;
