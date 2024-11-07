import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const dump = [{
    name: 'Smartphone',
    description: 'Latest model with great features.',
    price: 799,
    stock: 100,

  },
  {
    name: 'Laptop',
    description: 'High-end gaming laptop with powerful specs.',
    price: 1200,
    stock: 50,

  },
  {
    name: 'T-shirt',
    description: 'Cotton t-shirt with a cool print.',
    price: 25,
    stock: 200,

  },
  {
    name: 'Jeans',
    description: 'Comfortable denim jeans for everyday wear.',
    price: 40,
    stock: 150,

  }]


  const seed = async () => {
    try {
      console.log("Seeding started...");
  
      const data = await prisma.products.createMany({
        data: dump,
      });
  
      console.log("Products successfully entered into the database.");
      console.log(data); // This logs the inserted data (count or actual data).
  
    } catch (e) {
      console.error('Error during seeding:', e);
    } finally {
      await prisma.$disconnect();
    }
  };
  
  seed();