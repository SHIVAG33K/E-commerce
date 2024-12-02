import AppBar from "../components/appBar";
import CartPage from "../components/cartComponent";
import BusinessInfo from "../components/Info";

export default function Cart(){
 
    return(
        <div>
            <AppBar />
            <CartPage />
            <div className="bg-gray-100">
            <BusinessInfo />
            </div>
        </div>
    );
}