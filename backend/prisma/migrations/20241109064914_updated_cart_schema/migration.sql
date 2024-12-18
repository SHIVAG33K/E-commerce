/*
  Warnings:

  - A unique constraint covering the columns `[user_id,product_id]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Cart_product_id_key";

-- DropIndex
DROP INDEX "Cart_user_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Cart_user_id_product_id_key" ON "Cart"("user_id", "product_id");
