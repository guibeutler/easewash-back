/*
  Warnings:

  - You are about to alter the column `number` on the `client` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `number` on the `supplier` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `client` MODIFY `number` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `supplier` MODIFY `number` INTEGER NOT NULL;
