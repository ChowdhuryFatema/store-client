import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo,
            })
        }),
        register: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/register',
                method: 'POST',
                body: userInfo,
            })
        }),
        changePassword: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/change-password',
                method: 'POST',
                body: userInfo,
            })
        }),
        getMe: builder.query({
            query: (email = "") => {
                return {
                    url: `/admin/users/${email}`,
                    method: 'GET',
                };
            },
        }),
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useGetMeQuery,
    useChangePasswordMutation
} = authApi;