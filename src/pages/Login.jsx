import LoginImage from "../assets/images/login.png"
import { Link } from "react-router";
import { useState } from "react";
import GoogleIcon from "../assets/images/google-icon.png"
import SubmitButton from "../components/SubmitButton";
import { apiClient } from "../api/client";
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();

    const loginUser = async (data) => {
     try {
        const response = await apiClient.post("/users/login",data,{
            headers: {
                "Content-Type":"application/json"
            }
        });
        console.log(response);
        localStorage.setItem("ACCESS_TOKEN", response.data.data.accessToken);
        navigate("/");
     } catch (error) {
        console.log(error);
     }   
    }

    

    return (
        <div className="flex h-screen font-sans">

            {/* Left side */}

            <div className="flex-1 lg:w-[58%] flex flex-col justify-center items-center bg-gray-50 px-8 lg:px-16 py-12">
                <div className="w-full max-w-md space-y-8">
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-lg font-semibold mb-2">
                            <span className="text-purple-600">Event</span>{' '}
                            <span className="text-gray-900">Hive</span>
                        </h2>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Sign In to Event Hive
                        </h1>
                    </div>

                    {/* Form */}
                    <form action={loginUser} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"

                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                    Password
                                </label>
                                <button
                                    type="button"
                                    className="text-xs text-gray-400 font-medium"
                                >
                                    Forgot Your Password?
                                </button>
                            </div>
                            <input
                                type="password"
                                name="password"

                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                            />
                        </div>

                        {/* Sign In Button */}
                        <div className="items-center justify-center flex">
                            <SubmitButton className="w-[300px]  bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg" title = {"Sign In"}/>
                            
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

                    </form>

                    {/* Google Sign In Button */}
                    <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-sm hover:shadow-md">
                        <img src={GoogleIcon} alt="Google" className="w-5 h-5 mr-3" />
                        Sign in with Google
                    </button>
                </div>
            </div>

            {/* Right side */}
            <div className="w-[42%] h-full bg-cover bg-center relative bg-[url('./assets/images/login.png')]">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white p-8">
                    <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Hello Friend</h1>
                    <p className="mb-6 text-center drop-shadow-md">To keep connected with us provide us with your information</p>
                    <Link to='/register' className="bg-white/30 backdrop-blur-sm border border-white/20 hover:bg-white/40 transition-colors px-6 py-2 rounded-md">
                        Sign Up
                    </Link>
                </div>
            </div>

        </div>
    );
}