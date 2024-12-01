import { useState, useEffect } from "react";
import AppBar from "../components/appBar";
import BusinessInfo from "../components/Info";
import Example from "../components/sidebar";
import { useFetchData } from "../components/hooks";
import { setProducts} from "../features/productsSlice";
import { useSelector } from "react-redux";


export default function Products() {

  const url = "http://localhost:3000/api/products/";

    const { isLoading, isError, data, error } = useFetchData(url,setProducts);
    const items = data || [];

    if (isLoading) {
      return <div>Loading ...</div>;
    }

    if (isError) {
      return <div>Error: {error}</div>;
    }

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
