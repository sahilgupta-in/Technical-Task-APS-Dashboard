import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import logo from "../assets/logo.svg";
import appleicon from "../assets/appleicon.svg";
import googleicon from "../assets/googleicon.svg";
import metaicon from "../assets/metaicon.svg";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleQuickSignup = async () => {
    setLoading(true);
    // Simulate signup - in real app, this would call an API
    setTimeout(() => {
      setLoading(false);
      // Redirect to app after signup
      navigate("/app");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-800 to-orange-600 flex items-center justify-center p-4 md:p-8 font-[Outfit]">
      {/* Logo - Top Left Corner */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
          <img src={logo} alt="logo" className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <span className="text-lg md:text-xl font-semibold text-white">aps</span>
      </div>

      {/* Background Blur Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* LEFT SECTION */}
          <div className="hidden lg:block text-white space-y-6">
            <h1 className="text-3xl xl:text-4xl font-semibold leading-tight">
              Expert level Cybersecurity
              <br />
              in <span className="text-teal-300">hours</span> not weeks.
            </h1>

            <div className="space-y-3 text-sm">
              <h3 className="font-medium text-white mb-2">What's included</h3>

              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-teal-400 mt-0.5" />
                  <span>
                    Effortlessly spider and map targets to uncover hidden
                    security flaws
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <Check size={18} className="text-teal-400 mt-0.5" />
                  <span>Deliver high-quality findings in hours, not weeks</span>
                </li>

                <li className="flex items-start gap-3">
                  <Check size={18} className="text-teal-400 mt-0.5" />
                  <span>
                    Generate enterprise-grade security reports automatically
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/20">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-green-500 font-bold">★</span>
              </div>
              <p className="text-base font-bold">
                Rated 4.5/5.0{" "}
                <span className="text-gray-400 text-sm font-normal">
                  (100k+ reviews)
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT SECTION - FORM */}
          <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="text-center mb-5">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                Sign up
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Get started with instant access
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleQuickSignup();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Create a password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-500 text-white font-semibold py-4 rounded-full transition-all duration-200 text-lg"
              >
                {loading ? "Creating account..." : "Sign Up Free"}
              </button>

              <p className="text-xs text-center text-gray-500">
                By signing up, you agree to our Terms & Privacy Policy
              </p>

              {/* SOCIAL BUTTONS */}
              <div className="flex items-center justify-between gap-4 pt-4">
                <button className="flex-1 bg-black text-white py-2 rounded-full font-medium hover:opacity-90 flex items-center justify-center">
                  <img src={appleicon} alt="Apple" className="w-6 h-6" />
                </button>

                <button className="flex-1 border border-gray-300 py-2 rounded-full font-medium hover:bg-gray-100 flex items-center justify-center transition-all">
                  <img src={googleicon} alt="" className="w-6 h-6 " />
                </button>

                <button className="flex-1 bg-blue-600 text-white py-2 rounded-full font-medium hover:bg-blue-700 flex items-center justify-center transition-all">
                  <img src={metaicon} alt="" className="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
