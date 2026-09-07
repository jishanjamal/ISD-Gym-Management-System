import { useState } from "react";
import {Link} from "react-router-dom";

function ForgotPassword(){
    const[email, setEmail] = useState("");
    const[submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-1g p-8">
                {/* Header */}

                <div className = "text-center mb-8">
                    
                    <h1 className = "text-3xl font-bold text-gray-800">
                        ForgotPassword?
                    </h1>
                    
                    <p className = "text-gray-500 mt-2">
                        Enter your email to reset your password
                    </p>
                        
                </div>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className = "space-y-5">

                        {/*Email*/}
                        <div>
                            <label className = "block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>

                            <input
                                type = "email"
                                value = {email}
                                onChange = {(e) => setEmail(e.target.value)}
                                placeholder = "Enter your email"
                                required
                                className = "w-full px-4 py-3 border-gray-300 rounded-lg outline-none focus:ring-blue-500"                        
                            />
                        </div>

                        <button
                            type = "submit"
                            className = "w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Reset Link
                            </button>
                    </form>
                ) : (
                    <div className = "text-center">
                        <div className = "bg-green-100 text-green-700 rounded-lg p-4 mb-6">
                            If an account exists with this email, a password reset llink will be sent.
                        </div>
                        <Link
                        to = "/"
                        className = "text-blue-600 font-medium hover:underline">
                            Back to Login
                        </Link>

                         </div>
                )}

                {/*Login Link*/}
                {!submitted && (
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Remembery your password?{" "}

                        <Link
                        to = "/"
                        className = "text-blue-600 font-medium hover:underline">
                            Login
                        </Link>
                    </p>
                )}
            </div>
        </div>
    );
}
export default ForgotPassword;