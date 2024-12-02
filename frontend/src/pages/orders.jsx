import AppBar from "../components/appBar";
import BusinessInfo from "../components/Info";
import OrderPage from "../components/ordersPage";


export default function Orders(){
 return(

  <div>
    <AppBar />
    <OrderPage />
    <div className="bg-gray-100">
      <BusinessInfo />
    </div>
  </div>
  );
}