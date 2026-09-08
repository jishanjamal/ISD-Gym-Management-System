import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary Admin account
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "admin");

      navigate("/dashboard");
      return;
    }

    // Temporary Member account
    if (email === "member@gmail.com" && password === "member123") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "member");

      navigate("/member-dashboard");
      return;
    }

        if (email === "trainer@gmail.com" && password === "trainer123") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "admin");

      navigate("/trainer-dashboard");
      return;
    }

    alert("Invalid email or password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Dope Gym
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to your account
        </p>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="text-right mt-2">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg
                       hover:bg-blue-700 transition"
          >
            Login
          </button>

          {/* Register */}
          <div className="text-center mt-5">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}

              <Link
                to="/register"
                className="text-blue-600 font-medium hover:underline"
              >
                Register
              </Link>
            </p>
          </div>

        </form>

      </div>
    </div>
  );
}

export default Login;