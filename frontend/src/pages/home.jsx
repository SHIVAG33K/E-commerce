import  AppBar from "../components/appBar.jsx";
import Banner from "../components/banner.jsx";
import Example from "../components/details.jsx";
import PopularCategories from "../components/cata.jsx";
import FeaturedProducts from "../components/products.jsx"
import BusinessInfo from "../components/Info.jsx";


export default function Home(){
    return(
        <div >
            <AppBar />
            <Banner />
            <div className="p-10 pb-0">
            <PopularCategories />
            </div>
            <div className="pt-0">
            <FeaturedProducts/>
            </div>
            <div className="bg-gray-100">
            <BusinessInfo />
            </div>
        </div>
    );
}