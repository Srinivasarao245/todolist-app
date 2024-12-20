import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const TodosApi = createApi({
  reducerPath: 'TodosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4400' }),
  endpoints: (builder) => ({
    getallTodos: builder.query({
      query: () => `/`,
    }),
    AddnewTOdo: builder.mutation({
      
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetallTodosQuery,
               useLazyGetallTodosQuery, } = TodosApi