import { getProductsData } from '../../api/ProductApi';
import { useQuery } from '@tanstack/react-query';

const useProductApi = () => {
  let { data, isPending, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProductsData,
    staleTime: 5000,
  });
  return {
    data,
    isPending,
    error,
  };
};
