import { useState } from "react";
import bgImage from "../../assets/herobackground.png";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Create Your Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Get started with Planixo today!
        </p>

        <form className="space-y-4">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Company */}
          <input
            type="text"
            placeholder="Company Name"
            className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Role + Timezone */}
          <div className="grid grid-cols-2 gap-3">
            <select className="rounded-xl border px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Select Role</option>
              <option>Developer</option>
              <option>Manager</option>
              <option>Founder</option>
              <option>Student</option>
            </select>

            <select className="rounded-xl border px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
              <option>(GMT+00:00) UTC</option>
              <option>(GMT+05:30) India</option>
              <option>(GMT-05:00) USA</option>
            </select>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span
              className="absolute right-4 top-2.5 cursor-pointer text-sm text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full rounded-xl border px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span
              className="absolute right-4 top-2.5 cursor-pointer text-sm text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? "Hide" : "Show"}
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-2 font-semibold text-white hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Terms */}
        <p className="mt-4 text-xs text-center text-gray-500">
          By signing up, you agree to our{" "}
          <span className="text-blue-600 cursor-pointer">Terms of Service</span>{" "}
          and{" "}
          <span className="text-blue-600 cursor-pointer">Privacy Policy</span>
        </p>

        {/* Login */}
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
