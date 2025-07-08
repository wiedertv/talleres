/*
  Warnings:

  - You are about to drop the column `userId` on the `subscriptions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[subscriptionId]` on the table `organizations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[organizationId]` on the table `subscriptions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `organizationId` to the `subscriptions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "subscriptions" DROP CONSTRAINT "subscriptions_userId_fkey";

-- DropIndex
DROP INDEX "subscriptions_userId_key";

-- AlterTable
ALTER TABLE "organizations" ADD COLUMN     "subscriptionId" TEXT;

-- AlterTable
ALTER TABLE "subscriptions" DROP COLUMN "userId",
ADD COLUMN     "organizationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "organizations_subscriptionId_key" ON "organizations"("subscriptionId");

-- CreateIndex
CREATE UNIQUE INDEX "subscriptions_organizationId_key" ON "subscriptions"("organizationId");

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
