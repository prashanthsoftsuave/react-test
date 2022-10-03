import React from "react";

function Login() {
  return (
    <div
      style={{
        background: "#ffffff",
        width: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        minHeight: "100vh",
      }}
    >
      <div className="loginContain">
        <div>
          <h1 style={{ color: "#3f51b5" }}>Hi, Welcome Back</h1>
          <div>
            <h3>Enter your credentials to continue</h3>
          </div>
        </div>
        <div>
          <div>
            <form>
              <div>
                <label>Enter your username</label>
                <input style={{ width: "100%" }} />
              </div>
              <div>
                <label>Enter your password</label>
                <input style={{ width: "100%" }} />
              </div>
              <div>
                <button
                  style={{
                    color: "#3f51b5",
                    padding: "10px 50px",
                    margin: "10px",
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
