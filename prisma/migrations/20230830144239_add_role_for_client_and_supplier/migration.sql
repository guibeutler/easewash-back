/*
  Warnings:

  - Added the required column `role` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` ADD COLUMN `role` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `supplier` ADD COLUMN `role` VARCHAR(191) NOT NULL;
