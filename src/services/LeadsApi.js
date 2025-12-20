import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const leadsApi = createApi({
  reducerPath: "leadsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500" }),
  endpoints: (builder) => ({
    addUser: builder.mutation({
    query: (data) => ({
    url:"/api/users/addUser",
    method:"POST",
    body:data
    })
    }),
    userLogin: builder.mutation({
    query: (data) => ({
    url:"/api/users/userLogin",
    method:"POST",
    body:data
    })
    }),
      getAllLeads: builder.query({
      query: () => "/api/leads/all",
    }),

    getLeadsById: builder.query({
      query: (id) => `/api/leads/single/${id}`,
    }),

    deleteLead: builder.mutation({
      query: (id) => ({
        url: `/api/leads/delete/${id}`,
        method: "DELETE",
      }),
    }),

    editLead: builder.mutation({
      query: (data) => ({
        url: `/api/leads/edit/${data._id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddLeadMutation,
  useGetAllLeadsQuery,
  useDeleteLeadMutation,
  useLazyGetAllLeadsQuery,
  useGetLeadsByIdQuery,
  useLazyGetLeadsByIdQuery,
  useEditLeadMutation,
  useAddUserMutation,
  useUserLoginMutation
} = leadsApi;
