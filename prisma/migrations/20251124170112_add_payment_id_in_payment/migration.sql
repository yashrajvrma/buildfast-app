/*
  Warnings:

  - A unique constraint covering the columns `[paymentId]` on the table `payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `paymentId` to the `payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payment" ADD COLUMN     "paymentId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "payment_paymentId_key" ON "payment"("paymentId");
