

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
        return {
          url: `/products/${productId}`,
          method: 'GET',
        };
      },
      providesTags: ["Product"],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: '/products/create-product',
        method: 'POST',
        body: data,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, productData }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: productData,
      }),
      invalidatesTags: ['Product'],
    }),

    deleteProduct: builder.mutation({
      query: (productId = "") => ({
        url: `/products/${productId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = academicManagementApi;