import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-Teal mb-6">LOG IN</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Your Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-Teal"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Your Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-Teal"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-sm text-right text-Teal cursor-pointer hover:underline">
            Forget Password?
          </div>

          <button
            type="submit"
            className="w-full bg-Teal text-white font-bold py-2 rounded-md hover:bg-opacity-90 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <span className="text-Teal font-semibold cursor-pointer hover:underline">
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
