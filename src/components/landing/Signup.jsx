import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api/axios"; // 👈 interceptor instance
import bgImage from "../../assets/herobackground.png";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    role: "member",
    timezone: "UTC",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      await api.post("/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        companyName: formData.companyName,
        role: formData.role,
        timezone: formData.timezone,
      });

      // 🔁 Send OTP after signup
      await api.post("/auth/send-otp", {
        email: formData.email,
        type: "email_verification",
      });

      navigate("/verify-otp", { state: { email: formData.email } });
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Create Your Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Get started with Planixo today!
        </p>

        {error && (
          <p className="mb-3 text-center text-sm text-red-600">{error}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <div className="grid grid-cols-2 gap-3">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="rounded-xl border px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="member">Member</option>
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
            </select>

            <select
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              className="rounded-xl border px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="UTC">(GMT+00:00) UTC</option>
              <option value="Asia/Kolkata">(GMT+05:30) India</option>
              <option value="America/New_York">(GMT-05:00) USA</option>
            </select>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span
              className="absolute right-4 top-2.5 cursor-pointer text-sm text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span
              className="absolute right-4 top-2.5 cursor-pointer text-sm text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? "Hide" : "Show"}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-2 font-semibold text-white hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}