import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';  
import {addItems, removeItems, clearCart } from '../features/cartSlice.js';
import { useEffect } from 'react';
import { setProducts } from '../features/productsSlice';
import { useNavigate } from 'react-router-dom';

export function useFetchData(url,fn, shouldFetch) {

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
    enabled: shouldFetch,
  });
  useEffect(() => {
    if (shouldFetch && data) {
      dispatch(fn(data));
    }
  }, [data, dispatch, fn, shouldFetch]);

  
  return { isLoading, isError, data, error };
}



