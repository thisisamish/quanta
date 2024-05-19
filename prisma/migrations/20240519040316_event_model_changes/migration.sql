/*
  Warnings:

  - Added the required column `posterPic` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "posterPic" VARCHAR(2083) NOT NULL,
ALTER COLUMN "link" SET DATA TYPE VARCHAR(300);
