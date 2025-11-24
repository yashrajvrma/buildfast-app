/*
  Warnings:

  - The values [PENDING] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `email` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `template` on the `payment` table. All the data in the column will be lost.
  - Added the required column `productId` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('PROCESSING', 'SUCCESS', 'FAILED', 'CANCELLED');
ALTER TABLE "public"."payment" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "payment" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "public"."Status_old";
ALTER TABLE "payment" ALTER COLUMN "status" SET DEFAULT 'PROCESSING';
COMMIT;

-- DropIndex
DROP INDEX "payment_id_key";

-- AlterTable
ALTER TABLE "payment" DROP COLUMN "email",
DROP COLUMN "template",
ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'PROCESSING',
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "phoneNumber" TEXT,
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "verification" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "template" "Template" NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
