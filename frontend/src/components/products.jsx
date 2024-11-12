
const products =  [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
    {
      id: 2,
      name: 'Zara Stretch Shirt',
      category: 'Shirts',
      price: '$550.00',
      imageUrl: 'https://static.zara.net/photos///2022/V/0/2/p/4927/302/800/2/w/850/4927302800_6_1_1.jpg?ts=1643804064213',
    },
    {
      id: 3,
      name: 'Zara Checked Flannel Shirt',
      category: 'Shirts',
      price: '$450.00',
      imageUrl: 'https://static.zara.net/photos///2022/I/0/2/p/4927/303/250/2/w/850/4927303250_6_1_1.jpg?ts=1664354204611',
    },
    {
      id: 4,
      name: 'Men Self-Design Regular Fit Shirt',
      category: 'Shirts',
      price: '$540.00',
      imageUrl: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13714552/2022/7/11/5fa26965-d9c0-4ed8-8f3b-f520c60c06d01657538390816-Roadster-Men-Shirts-4391657538390472-1.jpg',
    },
  ];
  

export default function FeaturedProducts() {
        return (
          <div className="bg-white">
            <div className="w-full px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
      
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      }

  