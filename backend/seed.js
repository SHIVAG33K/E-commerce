import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    "id": 1,
    "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.",
    "details": "Made with durable fabric, a padded laptop sleeve, and an adjustable strap.",
    "price": 10995,
    "stock": 120,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "color": "Black",
    "Category": "men's accessories"
  },
  {
    "id": 2,
    "name": "Mens Casual Premium Slim Fit T-Shirts",
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
    "details": "Available in multiple colors, slim fit with a modern design.",
    "price": 2230,
    "stock": 259,
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "color": "Gray",
    "Category": "men's t-shirts"
  },
  {
    "id": 3,
    "name": "Mens Cotton Jacket",
    "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions such as working, hiking, camping, or other outdoors.",
    "details": "Cotton material with windproof and water-resistant properties.",
    "price": 5599,
    "stock": 500,
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "color": "Navy Blue",
    "Category": "men's jackets"
  },
  {
    "id": 4,
    "name": "Mens Casual Slim Fit",
    "description": "The color could be slightly different between on the screen and in practice.",
    "details": "Slim fit, suitable for all casual occasions.",
    "price": 1599,
    "stock": 430,
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "color": "Black",
    "Category": "men's shirts"
  },
  {
    "id": 5,
    "name": "Mens Casual Slim Fit T-Shirt",
    "description": "Soft and lightweight T-shirt with slim fit design.",
    "details": "Made with a cotton blend, ideal for everyday use.",
    "price": 1899,
    "stock": 215,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "color": "White",
    "Category": "men's t-shirts"
  },
  {
    "id": 6,
    "name": "Mens Outdoor Sports Jacket",
    "description": "Durable and water-resistant outdoor sports jacket suitable for adventure sports.",
    "details": "Breathable and moisture-wicking fabric, waterproof zippers.",
    "price": 7995,
    "stock": 65,
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "color": "Gray",
    "Category": "men's jackets"
  },
  {
    "id": 7,
    "name": "Mens Slim Fit Chinos Pants",
    "description": "Comfortable slim-fit chinos for casual wear.",
    "details": "Made with a stretchy cotton blend for extra comfort.",
    "price": 3250,
    "stock": 125,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "color": "Beige",
    "Category": "men's pants"
  },
  {
    "id": 8,
    "name": "Mens Vintage Polo Shirt",
    "description": "Vintage-style polo shirt with short sleeves.",
    "details": "Available in various colors, slim fit with a soft touch.",
    "price": 2499,
    "stock": 150,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "color": "Blue",
    "Category": "men's t-shirts"
  },
  {
    "id": 9,
    "name": "Mens Knitted Hoodie",
    "description": "Warm knitted hoodie for casual wear.",
    "details": "Ideal for colder weather, cozy and comfortable fabric.",
    "price": 4999,
    "stock": 320,
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "color": "Red",
    "Category": "men's hoodies"
  },
  {
    "id": 10,
    "name": "Women's V-Neck Maxi Dress",
    "description": "Elegant and comfortable V-neck maxi dress for casual or formal occasions.",
    "details": "Made with a flowy fabric, available in multiple colors.",
    "price": 3999,
    "stock": 215,
    "image": "https://fakestoreapi.com/img/81li-ujtlUL._AC_UX679_.jpg",
    "color": "Black",
    "Category": "women's dresses"
  },
  {
    "id": 11,
    "name": "Women's Casual Loose T-Shirt",
    "description": "Loose-fitting casual T-shirt for everyday wear.",
    "details": "Soft cotton material with a relaxed fit.",
    "price": 1799,
    "stock": 180,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "color": "Pink",
    "Category": "women's t-shirts"
  },
  {
    "id": 12,
    "name": "Women's High-Waisted Jeans",
    "description": "Comfortable and trendy high-waisted jeans.",
    "details": "Stretchable and form-fitting design for a flattering silhouette.",
    "price": 4299,
    "stock": 240,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "color": "Blue",
    "Category": "women's pants"
  },
  {
    "id": 13,
    "name": "Women's Lightweight Cardigan",
    "description": "Lightweight cardigan for layering during cool weather.",
    "details": "Perfect for layering over dresses or casual wear.",
    "price": 3599,
    "stock": 155,
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "color": "Beige",
    "Category": "women's sweaters"
  },
  {
    "id": 14,
    "name": "Women's Casual A-Line Dress",
    "description": "Casual A-line dress for summer and fall wear.",
    "details": "Soft cotton blend with a comfortable, breathable fit.",
    "price": 2999,
    "stock": 110,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "color": "Red",
    "Category": "women's dresses"
  },
  {
    "id": 15,
    "name": "Women's Cotton Shirt",
    "description": "Soft and breathable cotton shirt, perfect for any occasion.",
    "details": "Made from premium cotton fabric, fits true to size.",
    "price": 2399,
    "stock": 230,
    "image": "https://fakestoreapi.com/img/81li-ujtlUL._AC_UX679_.jpg",
    "color": "White",
    "Category": "women's shirts"
  },
  {
    "id": 16,
    "name": "Women's Sleeveless Top",
    "description": "Sleeveless top for casual summer days.",
    "details": "Light and airy design, perfect for warmer weather.",
    "price": 1999,
    "stock": 145,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "color": "White",
    "Category": "women's t-shirts"
  },
  {
    "id": 17,
    "name": "Women's Wide Leg Pants",
    "description": "Comfortable and stylish wide-leg pants for casual wear.",
    "details": "Loose-fitting design for a relaxed and comfortable fit.",
    "price": 3599,
    "stock": 120,
    "image": "https://fakestoreapi.com/img/81li-ujtlUL._AC_UX679_.jpg",
    "color": "Black",
    "Category": "women's pants"
  },
  {
    "id": 18,
    "name": "Women's Floral Summer Dress",
    "description": "Floral summer dress perfect for warm weather.",
    "details": "Breathable fabric and beautiful floral design.",
    "price": 2999,
    "stock": 200,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "color": "Pink",
    "Category": "women's dresses"
  },
  {
    "id": 19,
    "name": "Women's Hoodie with Pockets",
    "description": "Cozy hoodie with front pockets for winter wear.",
    "details": "Soft fleece lining, great for colder weather.",
    "price": 3999,
    "stock": 215,
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "color": "Gray",
    "Category": "women's hoodies"
  },
  {
    "id": 20,
    "name": "Unisex Leather Wallet",
    "description": "Stylish leather wallet for both men and women.",
    "details": "Compact and practical, fits most cards and cash.",
    "price": 2599,
    "stock": 180,
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "color": "Brown",
    "Category": "unisex accessories"
  },
  {
    "id": 21,
    "name": "Men's Stylish Leather Belt",
    "description": "Classic leather belt to complement any outfit.",
    "details": "Available in various sizes, durable and fashionable.",
    "price": 1899,
    "stock": 130,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "color": "Black",
    "Category": "men's accessories"
  },
  {
    "id": 22,
    "name": "Women’s Leather Handbag",
    "description": "Elegant leather handbag suitable for various occasions.",
    "details": "Available in multiple colors, spacious design.",
    "price": 9999,
    "stock": 210,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "color": "Brown",
    "Category": "women's accessories"
  },
  {
    "id": 23,
    "name": "Men’s Woolen Scarf",
    "description": "Soft woolen scarf for winter warmth.",
    "details": "Lightweight and comfortable, perfect for chilly weather.",
    "price": 1599,
    "stock": 50,
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "color": "Gray",
    "Category": "men's accessories"
  },
  {
    "id": 24,
    "name": "Women’s Sun Hat",
    "description": "Stylish sun hat perfect for beach days.",
    "details": "Lightweight and breathable for sunny weather.",
    "price": 1299,
    "stock": 145,
    "image": "https://fakestoreapi.com/img/81li-ujtlUL._AC_UX679_.jpg",
    "color": "Beige",
    "Category": "women's accessories"
  },
  {
    "id": 25,
    "name": "Men’s Canvas Backpack",
    "description": "Durable canvas backpack for daily use.",
    "details": "Large storage capacity, adjustable straps.",
    "price": 3999,
    "stock": 110,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "color": "Blue",
    "Category": "men's accessories"
  },
  {
    "id": 26,
    "name": "Women’s Fitness Tights",
    "description": "Comfortable fitness tights for yoga and workout.",
    "details": "Stretchable fabric for ultimate comfort during exercise.",
    "price": 2499,
    "stock": 95,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "color": "Black",
    "Category": "women's pants"
  },
  {
    "id": 27,
    "name": "Women’s Wool Coat",
    "description": "Elegant and warm wool coat for colder weather.",
    "details": "Classic design with excellent insulation.",
    "price": 8999,
    "stock": 160,
    "image": "https://fakestoreapi.com/img/81li-ujtlUL._AC_UX679_.jpg",
    "color": "Gray",
    "Category": "women's jackets"
  },
  {
    "id": 28,
    "name": "Men's Athletic Running Shoes",
    "description": "Comfortable running shoes designed for athletes.",
    "details": "Breathable mesh upper, responsive cushioning.",
    "price": 5999,
    "stock": 190,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "color": "Black",
    "Category": "men's footwear"
  }
]


async function emptyProducts() {

await prisma.orders.deleteMany({});
  console.log("All products added.");
}

emptyProducts()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
