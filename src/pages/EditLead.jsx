import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditLeadMutation, useGetLeadsByIdQuery, useLazyGetAllLeadsQuery } from '../services/LeadsApi';
import { useFormik } from 'formik';

const EditLead = () => {
  const { id } = useParams();
  const { isLoading, data } = useGetLeadsByIdQuery(id);
  const [updateLeadFn] = useEditLeadMutation();
  const [getAllLeadsfn] = useLazyGetAllLeadsQuery();
  const navigate = useNavigate();

  const leadsForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      courseInterested: "",
      status: "New"
    },
    onSubmit: async (values) => {
      await updateLeadFn(values);
      getAllLeadsfn();
      navigate("/");
    }
  });

  useEffect(() => {
    if (data) {
      leadsForm.setValues({ ...data?.data });
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card m-3 mx-auto p-3" style={{ maxWidth: "500px", width: "90%" }}>
      <form onSubmit={leadsForm.handleSubmit}>
        <div className="mb-3">
          <label className="form-label fs-5">Name</label>
          <input 
            type="text" 
            className="form-control" 
            {...leadsForm.getFieldProps("name")} 
          />
        </div>

        <div className="mb-3">
          <label className="form-label fs-5">Email</label>
          <input 
            type="email" 
            className="form-control" 
            {...leadsForm.getFieldProps("email")} 
          />
        </div>

        <div className="mb-3">
          <label className="form-label fs-5">Phone</label>
          <input 
            type="tel" 
            className="form-control" 
            {...leadsForm.getFieldProps("phone")} 
          />
        </div>

        <div className="mb-3">
          <label className="form-label fs-5">Course Interested</label>
          <input 
            type="text" 
            className="form-control" 
            {...leadsForm.getFieldProps("courseInterested")} 
          />
        </div>

        <button type="submit" className="btn btn-warning w-100">
          Update Lead
        </button>
      </form>
    </div>
  );
};

export default EditLead;
