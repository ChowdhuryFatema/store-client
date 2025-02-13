import { baseApi } from '../../api/baseApi';

const orderApi = baseApi.injectEndpoints({
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

    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verifyPayment",
        method: "GET",
        params: {order_id}
      })
    })

  }),
});

export const {
  useGetAllOrdersQuery,
  // useGetSingleProductQuery,
  useCreateOrderMutation,
  useVerifyOrderQuery,
} = orderApi;