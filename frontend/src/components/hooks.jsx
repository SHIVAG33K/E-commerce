import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';  
import {addItems, removeItems, clearCart } from '../features/cartSlice.js';
import { useEffect } from 'react';
import { setProducts } from '../features/productsSlice';

export function useFetchData(url,fn) {

  const dispatch = useDispatch();

  const fetchData = async () => {
    const { data } = await axios.get(url,{
      withCredentials : true
    });
    return data;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [url], 
    queryFn: fetchData, 
  });
  useEffect(()=>{
    if(data){
      dispatch(fn(data));
    }
  },[data]);

  
  return { isLoading, isError, data, error };
}




