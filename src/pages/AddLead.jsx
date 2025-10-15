import { useFormik } from "formik";
import { useAddLeadMutation, useLazyGetAllLeadsQuery } from "../services/LeadsApi";
import { useNavigate } from "react-router-dom";

const AddLead = () => {
  const [addLead] = useAddLeadMutation();
  const [getAllLeadsfn] = useLazyGetAllLeadsQuery();
  const navigate = useNavigate();
  const leadsForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      courseInterested: "",
    },
    onSubmit: async (values) => {
      await addLead(values);
      getAllLeadsfn();
      navigate("/");
    },
  });

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

        <button type="submit" className="btn btn-success w-100">
          Add Lead
        </button>
      </form>
    </div>
  );
};

export default AddLead;
