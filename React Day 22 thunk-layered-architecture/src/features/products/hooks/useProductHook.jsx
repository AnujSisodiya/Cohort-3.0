import { useQuery } from '@tanstack/react-query';
import {
  getAllCategories,
  getAllProducts,
  productByCategory,
} from '../api/productsApi';
import { useEffect, useState } from 'react';

export const useAllProducts = () => {
  const [search, setSearch] = useState(null);
  const [debounceSearch, setDebounceSearch] = useState(null);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [search]);
  let { data, isPending, errors } = useQuery({
    queryKey: ['products', debounceSearch],
    queryFn: () => getAllProducts(debounceSearch),
  });
  console.log('Porducts Data', data);
  return {
    data,
    isPending,
    errors,
    search,
    setSearch,
  };
};

export const useAllCategories = () => {
  let { data, isPending, errors } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });
  return {
    data,
    isPending,
    errors,
  };
};

export const useProductByCategory = () => {
  const [category, setCategory] = useState(null);
  let { data, isPending, errors } = useQuery({
    queryKey: ['productsBycategory', category],
    queryFn: () => productByCategory(category),
    enabled: !!category,
  });
  return {
    data,
    isPending,
    errors,
    category,
    setCategory,
  };
};
