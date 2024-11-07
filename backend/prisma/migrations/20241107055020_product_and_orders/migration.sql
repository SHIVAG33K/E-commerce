-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
