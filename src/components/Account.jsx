import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-6">Account Page</h1>
      <div className="mb-4">
        <button
          onClick={() => setIsLogin(true)}
          className={`px-4 py-2 mr-2 rounded ${
            isLogin ? "bg-blue-600 text-white" : "bg-white border"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`px-4 py-2 rounded ${
            !isLogin ? "bg-blue-600 text-white" : "bg-white border"
          }`}
        >
          Signup
        </button>
      </div>

      <p className="my-4">
        No Credentials Required, Just click on Login/SignUp Button
      </p>

      <form
        onSubmit={() => navigate("/")}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        {!isLogin && (
          <div className="mb-4">
            <label className="block text-left text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-3 py-2 border rounded focus:outline-none"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-left text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 border rounded focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label className="block text-left text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-3 py-2 border rounded focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default Account;
