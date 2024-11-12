import AppBar from "../components/appBar.jsx";
import ProductPage from "../components/productPage.jsx"
import BusinessInfo from "../components/Info.jsx";

export default function Product() {
    return(
        <div>
        <AppBar />
        <ProductPage />
        <div className="bg-gray-100">
            <BusinessInfo />
        </div>
        </div>
    );
}