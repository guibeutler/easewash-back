/*
  Warnings:

  - Added the required column `profileImg` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileImg` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskImg` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` ADD COLUMN `profileImg` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `supplier` ADD COLUMN `profileImg` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `task` ADD COLUMN `taskImg` VARCHAR(191) NOT NULL;
