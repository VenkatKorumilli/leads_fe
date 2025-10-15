import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const leadsApi = createApi({
  reducerPath: "leadsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500" }),
  endpoints: (builder) => ({
    addUser: builder.mutation({
    query: (data) => ({
    url:"/addUser",
    method:"POST",
    body:data
    })
    }),
    userLogin: builder.mutation({
    query: (data) => ({
    url:"/userLogin",
    method:"POST",
    body:data
    })
    }),
    addLead: builder.mutation({
      query: (leadData) => ({
        url: "/addlead",
        method: "POST",
        body: leadData,
      }),
    }),
    getAllLeads: builder.query({
      query: () => ({
        url: "/getallleads",
      }),
    }),
    getLeadsById: builder.query({
      query: (id) => ({
        url: `/getLeadById/${id}`,
      }),
    }),
    deleteLead: builder.mutation({
      query: (id) => ({
        url: `/deleteLead/${id}`,
        method: "DELETE",
      }),
    }),
    editLead: builder.mutation({
      query: (data) => ({
        url: `/editLead/${data["_id"]}`,
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
