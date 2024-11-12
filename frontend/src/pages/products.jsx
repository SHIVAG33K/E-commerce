
import AppBar from "../components/appBar";
import BusinessInfo from "../components/Info";
import Example from "../components/sidebar";

export default function Products(){
    const items = [
        
            {
              "id": 1,
              "name": "Basic Tee",
              "href": "#",
              "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
              "imageAlt": "Front of men's Basic Tee in black.",
              "price": "$35",
              "color": "Black"
            },
            {
              "id": 2,
              "name": "Slim Fit Jeans",
              "href": "#",
              "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg",
              "imageAlt": "Front view of men's slim fit jeans in blue.",
              "price": "$50",
              "color": "Blue"
            },
            {
              "id": 3,
              "name": "Casual Hoodie",
              "href": "#",
              "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
              "imageAlt": "Front view of men's casual hoodie in gray.",
              "price": "$60",
              "color": "Gray"
            },
            {
              "id": 4,
              "name": "Chino Pants",
              "href": "#",
              "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
              "imageAlt": "Men's chino pants in khaki.",
              "price": "$45",
              "color": "Khaki"
            },
            {
              "id": 5,
              "name": "Graphic T-Shirt",
              "href": "#",
              "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-05.jpg",
              "imageAlt": "Front of men's graphic t-shirt in white with print.",
              "price": "$25",
              "color": "White"
            },
            {
              "id": 6,
              "name": "Button-up Shirt",
              "href": "#",
              "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-06.jpg",
              "imageAlt": "Men's button-up shirt in navy blue.",
              "price": "$40",
              "color": "Navy"
            },
            {
              "id": 7,
              "name": "Denim Jacket",
              "href": "#",
              "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-07.jpg",
              "imageAlt": "Front of men's denim jacket in light blue.",
              "price": "$80",
              "color": "Light Blue"
            },
            {
              "id": 8,
              "name": "Track Pants",
              "href": "#",
              "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-08.jpg",
              "imageAlt": "Side view of men's track pants in black.",
              "price": "$35",
              "color": "Black"
            },
            {
              "id": 9,
              "name": "Leather Jacket",
              "href": "#",
              "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-09.jpg",
              "imageAlt": "Front of men's leather jacket in brown.",
              "price": "$120",
              "color": "Brown"
            },
            {
              "id": 10,
              "name": "V-Neck T-Shirt",
              "href": "#",
              "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-10.jpg",
              "imageAlt": "Front of men's V-neck t-shirt in navy.",
              "price": "$30",
              "color": "Navy"
            },
            {
              "id": 11,
              "name": "Cargo Shorts",
              "href": "#",
              "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-11.jpg",
              "imageAlt": "Side view of men's cargo shorts in olive.",
              "price": "$40",
              "color": "Olive"
            },
            {
              "id": 12,
              "name": "Polo Shirt",
              "href": "#",
              "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-12.jpg",
              "imageAlt": "Front of men's polo shirt in red.",
              "price": "$50",
              "color": "Red"
            }
          
          
    ];

    return (
        <div>
            <AppBar />
            <div className="pt-0">
            <Example Products={items} />
            </div>  
            <div className="bg-gray-100">
            <BusinessInfo />
            </div>        
        </div>
    );
}