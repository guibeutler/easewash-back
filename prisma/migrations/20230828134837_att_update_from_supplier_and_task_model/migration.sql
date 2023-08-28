/*
  Warnings:

  - You are about to drop the column `updetedAt` on the `supplier` table. All the data in the column will be lost.
  - You are about to drop the column `updetedAt` on the `task` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `supplier` DROP COLUMN `updetedAt`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `task` DROP COLUMN `updetedAt`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
