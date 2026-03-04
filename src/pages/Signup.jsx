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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-800 to-orange-600 flex items-center justify-center p-4 sm:p-6 md:p-8 font-[Outfit]">
      {/* Logo - Top Left Corner */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 flex items-center z-10">
        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
          <img src={logo} alt="logo" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>
        <span className="text-base sm:text-lg md:text-xl font-semibold text-white ml-2">aps</span>
      </div>

      {/* Background Blur Effects */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30 overflow-hidden">
        <div className="absolute -top-20 -left-20 sm:top-0 sm:left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 sm:top-0 sm:right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-20 left-1/4 sm:bottom-0 sm:left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* LEFT SECTION */}
          <div className="hidden lg:block text-white space-y-6 xl:space-y-8 px-2">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
              Expert level Cybersecurity
              <br />
              in <span className="text-teal-300">hours</span> not weeks.
            </h1>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <h3 className="font-medium text-white mb-3">What's included</h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Effortlessly spider and map targets to uncover hidden
                    security flaws
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <Check size={18} className="text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Deliver high-quality findings in hours, not weeks</span>
                </li>

                <li className="flex items-start gap-3">
                  <Check size={18} className="text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Generate enterprise-grade security reports automatically
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/20">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-green-500 font-bold">★</span>
              </div>
              <p className="text-sm sm:text-base font-bold">
                Rated 4.5/5.0{" "}
                <span className="text-gray-400 text-xs sm:text-sm font-normal">
                  (100k+ reviews)
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT SECTION - FORM */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8">
            <div className="text-center mb-5 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-800">
                Sign up
              </h2>

              <p className="text-sm sm:text-base text-gray-500 mt-1">
                Get started with instant access
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleQuickSignup();
              }}
              className="space-y-4 sm:space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 sm:py-3.5 md:py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 sm:py-3.5 md:py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Create a password"
                  className="w-full px-4 py-3 sm:py-3.5 md:py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-base"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-500 text-white font-semibold py-3.5 sm:py-4 md:py-4 rounded-full transition-all duration-200 text-base sm:text-lg"
              >
                {loading ? "Creating account..." : "Sign Up Free"}
              </button>

              <p className="text-xs sm:text-sm text-center text-gray-500">
                By signing up, you agree to our Terms & Privacy Policy
              </p>

              {/* SOCIAL BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-2">
                <button className="w-full sm:flex-1 bg-black text-white py-2.5 sm:py-2 rounded-full font-medium hover:opacity-90 flex items-center justify-center transition-all">
                  <img src={appleicon} alt="Apple" className="w-5 h-5 mr-2" />
                  <span className="text-sm">Apple</span>
                </button>

                <button className="w-full sm:flex-1 border border-gray-300 py-2.5 sm:py-2 rounded-full font-medium hover:bg-gray-100 flex items-center justify-center transition-all">
                  <img src={googleicon} alt="Google" className="w-5 h-5 mr-2" />
                  <span className="text-sm">Google</span>
                </button>

                <button className="w-full sm:flex-1 bg-blue-600 text-white py-2.5 sm:py-2 rounded-full font-medium hover:bg-blue-700 flex items-center justify-center transition-all">
                  <img src={metaicon} alt="Meta" className="w-5 h-5 mr-2" />
                  <span className="text-sm">Meta</span>
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
