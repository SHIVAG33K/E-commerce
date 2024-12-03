
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';  
import {addItems, removeItems, clearCart } from '../features/cartSlice.js';


const product = {

  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],

  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
    highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  }



// const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const [items , setItems] = useState([])
  
 

  const {id} = useParams();
  const url = `http://localhost:3000/api/products/${id}`;
  const dispatch = useDispatch();

  const products = useSelector(state => state.products.products);

  useEffect(()=>{
    if(products.length > 0){
      setItems(products.find(item => item.id == id));
    }else{
      const fetchItems = async () => {
        try {
          const response = await axios.get(url,{
            withCredentials: true
          });
         setItems(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchItems();
    }
  },[products])

  const addCart = async() => {
    try{
      const query = await axios.post("http://localhost:3000/api/cart/",{
        product_id: Number(id) , quantity : 1
      },{
        withCredentials: true
      })
      navigate("/cart")
      console.log(query);
      console.log(items);
      dispatch(addItems(items));
    }catch(e){
      console.log(e);
    }

  }
  


  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className="pt-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex pl-0 max-w-2xl pr-0 items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}

            <li className="text-sm">
              <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {items?.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Product Info Section */}
        <div className="mx-auto max-w-2xl p-20 px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Left Column: Product Image */}
            <div className="flex justify-center items-center">
              <img
                src={items?.image}
                className="w-full max-w-md object-cover object-center rounded-lg"
              />

            </div>

            {/* Right Column: Product Details */}
            <div className="lg:pl-8 mt-6 lg:mt-0">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{items?.name}</h1>
              <p className="text-3xl tracking-tight text-gray-900 mt-4">${items?.price}</p>



              {/* Color Selector */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <fieldset aria-label="Choose a color" className="mt-4">
                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={classNames(
                          color.selectedClass,
                          'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10',
                          )}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              {/* Size Selector */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={classNames(
                          size.inStock
                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6',
                        )}
                      >
                        <span>{size.name}</span>
                        {size.inStock ? (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                            >
                              <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              {/* Add to Bag Button */}
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={addCart}>
                Add to Cart
              </button>
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => {
                  navigate("/")
                }}>
                buy
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <p className="mt-4 text-base text-gray-900">{items?.description}</p>
          </div>

          {/* Highlights */}
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="text-gray-400">
                  <span className="text-gray-600">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>
            <p className="mt-4 text-sm text-gray-600">{items?.details}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
