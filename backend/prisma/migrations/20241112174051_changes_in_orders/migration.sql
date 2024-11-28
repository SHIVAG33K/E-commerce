/*
  Warnings:

  - Added the required column `color` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `details` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "details" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;
