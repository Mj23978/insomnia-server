/*
  Warnings:

  - A unique constraint covering the columns `[collectionId]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `collectionId` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "collectionId" TEXT NOT NULL,
ALTER COLUMN "name" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Collection_collectionId_key" ON "Collection"("collectionId");
