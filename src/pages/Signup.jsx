import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useAddUserMutation } from '../services/LeadsApi';

const Signup = () => {
  const [addUserFn] = useAddUserMutation();

  const signupForm = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      username: '',
      password: '',
    },
    // validationSchema: Yup.object({
    //   firstName: Yup.string().required('First Name is required'),
    //   lastName: Yup.string().required('Last Name is required'),
    //   email: Yup.string().email('Invalid email address').required('Email is required'),
    //   phone: Yup.string().required('Phone is required'),
    //   username: Yup.string().required('Username is required'),
    //   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    //   role: Yup.string().oneOf(['user', 'admin'], 'Invalid role').required('Role is required'),
    // }),
    onSubmit: async (values, { resetForm }) => {
      await addUserFn(values);
      resetForm();
    },
  });

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '15px' }}
    >
      <div className="card shadow-sm" style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }}>
        <div className="card-body p-4">
          <h4 className="card-title text-center mb-4">Sign Up</h4>
          <form onSubmit={signupForm.handleSubmit} noValidate>
            <div className="row">
              <div className="mb-3 col-md-6">
                <div className="form-floating">
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    className={`form-control ${signupForm.touched.firstName && signupForm.errors.firstName ? 'is-invalid' : ''}`}
                    {...signupForm.getFieldProps('firstName')}
                  />
                  <label htmlFor="firstName">First Name</label>
                  {signupForm.touched.firstName && signupForm.errors.firstName && (
                    <div className="invalid-feedback">{signupForm.errors.firstName}</div>
                  )}
                </div>
              </div>

              <div className="mb-3 col-md-6">
                <div className="form-floating">
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    className={`form-control ${signupForm.touched.lastName && signupForm.errors.lastName ? 'is-invalid' : ''}`}
                    {...signupForm.getFieldProps('lastName')}
                  />
                  <label htmlFor="lastName">Last Name</label>
                  {signupForm.touched.lastName && signupForm.errors.lastName && (
                    <div className="invalid-feedback">{signupForm.errors.lastName}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-3 form-floating">
              <input
                id="username"
                type="text"
                placeholder="Username"
                className={`form-control ${signupForm.touched.username && signupForm.errors.username ? 'is-invalid' : ''}`}
                {...signupForm.getFieldProps('username')}
              />
              <label htmlFor="username">Username</label>
              {signupForm.touched.username && signupForm.errors.username && (
                <div className="invalid-feedback">{signupForm.errors.username}</div>
              )}
            </div>

            <div className="mb-3 form-floating">
              <input
                id="email"
                type="email"
                placeholder="Email"
                className={`form-control ${signupForm.touched.email && signupForm.errors.email ? 'is-invalid' : ''}`}
                {...signupForm.getFieldProps('email')}
              />
              <label htmlFor="email">Email</label>
              {signupForm.touched.email && signupForm.errors.email && (
                <div className="invalid-feedback">{signupForm.errors.email}</div>
              )}
            </div>

            <div className="mb-3 form-floating">
              <input
                id="phone"
                type="text"
                placeholder="Phone"
                className={`form-control ${signupForm.touched.phone && signupForm.errors.phone ? 'is-invalid' : ''}`}
                {...signupForm.getFieldProps('phone')}
              />
              <label htmlFor="phone">Phone</label>
              {signupForm.touched.phone && signupForm.errors.phone && (
                <div className="invalid-feedback">{signupForm.errors.phone}</div>
              )}
            </div>

            <div className="mb-3 form-floating">
              <input
                id="password"
                type="password"
                placeholder="Password"
                className={`form-control ${signupForm.touched.password && signupForm.errors.password ? 'is-invalid' : ''}`}
                {...signupForm.getFieldProps('password')}
              />
              <label htmlFor="password">Password</label>
              {signupForm.touched.password && signupForm.errors.password && (
                <div className="invalid-feedback">{signupForm.errors.password}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold" disabled={signupForm.isSubmitting}>
              Sign Up
            </button>
          </form>
        </div>

        <div className="fs-5 text-center bg-white py-3">
          <small>
            Already have an account?{' '}
            <Link to="/login" className="text-primary text-decoration-none fw-semibold">
              Login
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Signup;
