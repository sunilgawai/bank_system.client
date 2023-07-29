import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

// @ts-ignore
import OtpInput from "otp-input-react";
import { useState } from "react";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Toaster } from "react-hot-toast";
import { OutlinedInput } from "@mui/material";

import ApiService from "../services/ApiService";
import { setAuth } from "../store/authSlice";
import { useAppDispatch } from "../store/hooks";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [optScreen, setOtpScreen] = useState(false);

    // Auth
    const dispatch = useAppDispatch();

    const [form, setForm] = useState({ email: '', password: '' });
    const handleVerifyAndLogin = () => {
        ApiService.verifyOtp({ ...form, otp })
            .then((response) => {
                if (response.status === 200) {
                    setShowOTP(true);
                    dispatch(setAuth(response.data));
                    if (response.data.role === 'customer') {
                        navigate('/customer');
                    } else {
                        navigate('/admin');
                    }
                }
                if (response.status === 401) {
                    setError(response.data.message);
                }
                setLoading(false)
            }).catch((error) => {
                console.log('error', error);
                setLoading(false)
                setError(error.response.data.message);
                setTimeout(() => setError(''), 2000);
            })
    }

    const handleSendOtp = async () => {
        setLoading(true)
        ApiService.getOtp(form)
            .then((response) => {
                // console.log(response)
                if (response.status === 200) {
                    setShowOTP(true);
                }
                setLoading(false)
            }).catch((error) => {
                setLoading(false)
                setError(error.response.data.message);
                // console.log('error', error);
                setTimeout(() => setError(''), 2000);
            })
    }



    return (
        <section className="bg-emerald-500 flex items-center justify-center h-screen">
            <div>
                <Toaster toastOptions={{ duration: 4000 }} />
                <div id="recaptcha-container"></div>
                {optScreen ? (
                    <h2 className="text-center text-white font-medium text-2xl">
                        👍Login Success
                    </h2>
                ) : (
                    <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                        <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
                            Welcome to <br /> The Developers Bank.
                        </h1>
                        {showOTP ? (
                            <>
                                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                    <BsFillShieldLockFill size={30} />
                                </div>
                                <label
                                    htmlFor="otp"
                                    className="font-bold text-xl text-white text-center"
                                >
                                    Enter your OTP
                                </label>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    OTPLength={6}
                                    otpType="number"
                                    disabled={false}
                                    autoFocus
                                    className="opt-container "
                                ></OtpInput>
                                <button
                                    onClick={handleVerifyAndLogin}
                                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                >
                                    {loading && (
                                        <CgSpinner size={20} className="mt-1 animate-spin" />
                                    )}
                                    <span>{error ? error : 'Verify OTP'}</span>
                                </button>
                                <button onClick={() => setShowOTP(!showOTP)}
                                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                                    <span>Back to Login</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                    <BsTelephoneFill size={30} />
                                </div>
                                <label
                                    htmlFor=""
                                    className="font-bold text-xl text-white text-center"
                                >
                                    Enter your email and password.
                                </label>
                                <OutlinedInput
                                    name='email'
                                    value={form.email}
                                    placeholder="Enter your email"
                                    required={true}
                                    color="primary"
                                    style={{ textAlign: 'center' }}
                                    onChange={e => setForm({ ...form, email: e.target.value })} />
                                <OutlinedInput
                                    name='password'
                                    value={form.password}
                                    placeholder="Enter your password"
                                    required={true}
                                    color="primary"
                                    style={{ textAlign: 'center' }}
                                    onChange={e => setForm({ ...form, password: e.target.value })} />
                                <Link to="/reset" className="text-white font-md">forgot password</Link>
                                <button
                                    onClick={handleSendOtp}
                                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                >
                                    {loading && (
                                        <CgSpinner size={20} className="mt-1 animate-spin" />
                                    )}
                                    <span>{error ? error : 'Send code via Email'}</span>
                                </button>
                                <button
                                    onClick={() => {
                                        navigate("../")
                                    }}
                                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                                    <span>Back to Home</span>
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </section >
    )
}

export default Login;