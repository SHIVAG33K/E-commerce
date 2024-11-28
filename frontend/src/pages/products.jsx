import { useState, useEffect } from "react";
import AppBar from "../components/appBar";
import BusinessInfo from "../components/Info";
import Example from "../components/sidebar";
import axios from "axios";

export default function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products/",{
          withCredentials: true
        });
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchItems();
  }, []);

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
