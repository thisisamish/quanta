/*
  Warnings:

  - A unique constraint covering the columns `[memberId,gradYear]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[memberId,gradYear]` on the table `PostHolder` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `postholder` DROP FOREIGN KEY `PostHolder_memberId_fkey`;

-- CreateIndex
CREATE UNIQUE INDEX `Member_memberId_gradYear_key` ON `Member`(`memberId`, `gradYear`);

-- CreateIndex
CREATE UNIQUE INDEX `PostHolder_memberId_gradYear_key` ON `PostHolder`(`memberId`, `gradYear`);

-- AddForeignKey
ALTER TABLE `PostHolder` ADD CONSTRAINT `PostHolder_memberId_gradYear_fkey` FOREIGN KEY (`memberId`, `gradYear`) REFERENCES `Member`(`memberId`, `gradYear`) ON DELETE RESTRICT ON UPDATE CASCADE;
