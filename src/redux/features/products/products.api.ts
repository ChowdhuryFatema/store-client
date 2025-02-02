

import { TQueryParam, TResponseRedux } from '../../../types';
import { TProduct } from '../../../types/product.type';
import { baseApi } from '../../api/baseApi';
  
  const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getAllProducts: builder.query({
        query: (args) => {
          const params = new URLSearchParams();
  
          if (args) {
            args.forEach((item: TQueryParam) => {
              params.append(item.name, item.value as string);
            });
          }
  
          return {
            url: '/products',
            method: 'GET',
            params: params,
          };
        },
        transformResponse: (response: TResponseRedux<TProduct[]>) => {
          return {
            data: response.data?.result,
            meta: response.data?.meta,
          };
        },
      }),
      getSingleProduct: builder.query({
        query: (productId = "") => {
          console.log('from redux', productId)
          return {
            url: `/products/${productId}`,
            method: 'GET',
          };
        },
      }),
      addProduct: builder.mutation({
        query: (data) => ({
          url: '/products/create-product',
          method: 'POST',
          body: data,
        }),
      }),
    }),
  });
  
  export const {
    useGetAllProductsQuery,
    useGetSingleProductQuery,
    useAddProductMutation,
  } = academicManagementApi;