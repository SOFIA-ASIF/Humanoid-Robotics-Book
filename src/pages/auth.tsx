import React, { useState } from "react";
import Layout from "@theme/Layout";
import { useHistory } from "@docusaurus/router";

export default function AuthPage() {
  const history = useHistory();
  const [isSignup, setIsSignup] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = () => {
  if (!email || !password || (isSignup && !name)) {
    alert("Please fill all required fields");
    return;
  }

  document.cookie = "isAuth=true; path=/; max-age=86400";
  document.cookie = `userName=${encodeURIComponent(
    isSignup ? name : email.split("@")[0]
  )}; path=/; max-age=86400`;

  window.location.href = "/docs/intro";
};


  return (
    <Layout title={isSignup ? "Sign Up" : "Sign In"}>
      <main style={{ padding: "4rem", textAlign: "center" }}>
        <h1>{isSignup ? "Create an Account" : "Welcome Back"}</h1>

        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleSubmit} style={buttonStyle}>
          {isSignup ? "Sign Up" : "Sign In"}
        </button>

        <p style={{ marginTop: "1rem" }}>
          {isSignup ? "Already have an account?" : "New here?"}{" "}
          <span
            style={{ color: "#1A3D64", cursor: "pointer" }}
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Sign in" : "Sign up"}
          </span>
        </p>
      </main>
    </Layout>
  );
}

const inputStyle = {
  display: "block",
  margin: "1rem auto",
  padding: "0.6rem",
  width: "260px",
};

const buttonStyle = {
  marginTop: "1rem",
  padding: "0.6rem 2rem",
};
