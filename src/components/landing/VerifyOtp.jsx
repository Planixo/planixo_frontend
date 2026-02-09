import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api/axios";
import bgImage from "../../assets/herobackground.png";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get data from Signup page
  const email = location.state?.email;
  const type = location.state?.type || "email_verification";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔒 Safety check
  if (!email) {
    navigate("/signup");
    return null;
  }

  // ================= VERIFY OTP =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!otp) {
      return setError("Please enter OTP");
    }

    try {
      setLoading(true);

      await api.post("/auth/verify-otp", {
        email,
        otp,
        type, // ✅ REQUIRED BY BACKEND
      });

      // ✅ OTP verified → redirect
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // ================= RESEND OTP =================
  const resendOtp = async () => {
    try {
      await api.post("/auth/send-otp", {
        email,
        type,
      });
      alert("OTP sent again to your email");
    } catch {
      alert("Failed to resend OTP");
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
          Verify Your Email
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-6">
          Enter the OTP sent to <br />
          <span className="font-semibold">{email}</span>
        </p>

        {error && (
          <p className="mb-4 text-center text-sm text-red-600">{error}</p>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit OTP"
            maxLength={6}
            className="w-full text-center tracking-widest text-xl rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-2 text-white font-semibold hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          Didn’t receive the code?{" "}
          <button
            onClick={resendOtp}
            className="text-blue-600 font-semibold hover:underline"
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
}