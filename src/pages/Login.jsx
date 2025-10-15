import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useUserLoginMutation } from '../services/LeadsApi';

const Login = () => {
  const [loginUserFn] = useUserLoginMutation()
  const navigate = useNavigate();
 
  const loginForm = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values, { resetForm }) => {
      const response = await loginUserFn(values);
      if (response.data?.msg === "Successful") {
        window.localStorage.setItem("token", response.data.token);
        navigate("/");  
      }
      resetForm();
    }
  });

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '15px' }}
    >
      <div className="card shadow-sm" style={{ width: '100%', maxWidth: '400px', borderRadius: '12px' }}>
        <div className="card-body p-4">
          <h4 className="card-title text-center mb-4 fw-semibold">Login</h4>

          <form onSubmit={loginForm.handleSubmit} noValidate>
            {/* Username */}
            <div className="mb-3 form-floating">
              <input
                type="text"
                placeholder="Username"
                className={`form-control ${loginForm.touched.username && loginForm.errors.username ? 'is-invalid' : ''}`}
                {...loginForm.getFieldProps('username')}
              />
              <label htmlFor="username">Username</label>
              {loginForm.touched.username && loginForm.errors.username && (
                <div className="invalid-feedback">{loginForm.errors.username}</div>
              )}
            </div>

            {/* Password */}
            <div className="mb-4 form-floating">
              <input
                type="password"
                placeholder="Password"
                className={`form-control ${loginForm.touched.password && loginForm.errors.password ? 'is-invalid' : ''}`}
                {...loginForm.getFieldProps('password')}
              />
              <label htmlFor="password">Password</label>
              {loginForm.touched.password && loginForm.errors.password && (
                <div className="invalid-feedback">{loginForm.errors.password}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-semibold"
              disabled={loginForm.isSubmitting}
            >
              Log In
            </button>
          </form>
        </div>

        <div className="text-center bg-white py-3">
          <div>
            New user?{' '}
            <Link to="/signup" className="text-primary text-decoration-none fw-semibold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
