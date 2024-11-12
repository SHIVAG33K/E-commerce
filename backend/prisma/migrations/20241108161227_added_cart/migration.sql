/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[product_id]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `quantity` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "quantity" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cart_user_id_key" ON "Cart"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_product_id_key" ON "Cart"("product_id");
