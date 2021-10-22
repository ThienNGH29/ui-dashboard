import React from "react";

function Login(props) {
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-box-inner">
          <img src="./logo-black.svg" alt="" />
          <div className="login-title">
            <h1>Welcome,</h1>
            <p>Sign in to continue</p>
          </div>
          <form className="login-form">
            <div className="form-floating mb-3">
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <label for="email" className="form-label">
                Email
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <label for="password" className="form-label">
                Password
              </label>
            </div>
            <a href="/forgot" className="login-forgot">
              Forget password?
            </a>
            <button
              type="button"
              className="btn btn-warning w-100 py-3 mt-3 mb-2"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
