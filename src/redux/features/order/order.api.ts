import { baseApi } from '../../api/baseApi';
  
  const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getAllOrders: builder.query({
        query: () => {
          return {
            url: '/orders',
            method: 'GET',
          };
        },
      }),
    //   getSingleProduct: builder.query({
    //     query: (productId = "") => {
    //       console.log('from redux', productId)
    //       return {
    //         url: `/products/${productId}`,
    //         method: 'GET',
    //       };
    //     },
    //   }),
      
    createOrder: builder.mutation({
        query: (data) => ({
          url: '/orders/create-order',
          method: 'POST',
          body: data,
        }),
      }),

    }),
  });
  
  export const {
    useGetAllOrdersQuery,
    // useGetSingleProductQuery,
    useCreateOrderMutation,
  } = academicManagementApi;