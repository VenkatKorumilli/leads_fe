import React, { useEffect } from "react";
import {
  useDeleteLeadMutation,
  useGetAllLeadsQuery,
  useLazyGetAllLeadsQuery,
} from "../services/LeadsApi";
import { Link } from "react-router-dom";

const Leads = () => {
  const { data, isLoading } = useGetAllLeadsQuery();
  const [getAllLeads] = useLazyGetAllLeadsQuery();
  const [deleteLead] = useDeleteLeadMutation();
  const token = window.localStorage.getItem("token")

  function handleDelete(id) {
    deleteLead(id)
    getAllLeads()
  }
  useEffect(()=>{
    getAllLeads()
  },[])

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 text-primary">Leads List</h2>
      <div className="table-responsive shadow-sm rounded bg-white p-3">
        <table className="table table-bordered table- table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Course</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan="7" className="text-center text-muted">
                  Loading leads...
                </td>
              </tr>
            )}
            {!isLoading && data?.data?.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-muted">
                  No leads found.
                </td>
              </tr>
            )}
            {!isLoading &&
              data?.data?.map((lead) => (
                <tr key={lead._id}>
                  <td className="fw-semibold">{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.courseInterested}</td>
                  <td>
                    <span
                      className={`badge ${
                        lead.status === "New"
                          ? "bg-success"
                          : lead.status === "Contacted"
                          ? "bg-warning text-dark"
                          : "bg-secondary"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                  <td>
                    <Link className="btn btn-warning btn-sm me-2" to={`/editLead/${lead['_id']}`}>Edit</Link>
                    <button
                      onClick={() => {
                        handleDelete(lead["_id"]);
                      }}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;
