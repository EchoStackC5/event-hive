import RegisterImage from "../assets/images/register.png"
import { Link } from "react-router";
import { useState } from "react";
import GoogleIcon from "../assets/images/google-icon.png"

export default function Register() {

    const [form, setForm] = useState({ name: '', password: '', confirmPassword: '' });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="flex h-screen font-sans">
            {/* Left side */}
            <div className="w-[42%] h-full bg-cover bg-center relative bg-[url('./assets/images/register.png')]">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white p-8">
                    <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Welcome Back</h1>
                    <p className="mb-6 text-center drop-shadow-md">To keep connected with us provide us with your information</p>
                    <Link to="/login" className="bg-white/30 backdrop-blur-sm border border-white/20 hover:bg-white/40 transition-colors px-6 py-2 rounded-md">
                        Sign In
                    </Link>
                </div>
            </div>

            {/* Right side */}
            <div className="flex-1 lg:w-[58%] flex flex-col justify-center items-center bg-gray-50 px-8 lg:px-16 py-12">
                <div className="w-full max-w-md space-y-6">
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-lg font-semibold mb-1.5">
                            <span className="text-purple-600">Event</span>{' '}
                            <span className="text-gray-900">Hive</span>
                        </h2>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Signup to Event Hive
                        </h1>
                    </div>

                    {/* Form */}
                    <div className="space-y-4">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                                Your Name
                            </label>
                            <input
                                type="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                            />
                        </div>
                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                                Your Email
                            </label>
                            <input
                                type="mail"
                                name="mail"
                                value={form.mail}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                    Password
                                </label>

                            </div>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                    Confirm Password
                                </label>

                            </div>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                            />
                        </div>

                        {/* Sign In Button */}
                        <div className="items-center justify-center flex">
                            <button className="w-[65%]  bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                                Sign Up
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-50 text-gray-500">Or</span>
                            </div>
                        </div>

                        {/* Google Sign In Button */}
                        <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-sm hover:shadow-md">
                            <img src={GoogleIcon} alt="Google" className="w-5 h-5 mr-3" />
                            Sign Up with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}