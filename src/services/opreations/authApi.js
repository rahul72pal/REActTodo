import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

const {
    SENDOTP_API,
    LOGIN_API,
    SINGUP_API
} = endpoints;

export function sendOtp(email, navigate) {
    return async () => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST", SENDOTP_API, {
                email
            })
            console.log("Send Otp Response =", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("OTP send Successfully")
            navigate("/verify-email")
        } catch (error) {
            console.log("Send Otp Error =", error);
            toast.error(`OTP Failed ${error.response.data.message}`)
        }
        toast.dismiss(toastId);
    }
}


export function singUp(
    firstName,
    lastName,
    email,
    password,
    accountType,
    confirmPassword,
    otp,
    navigate) {
    return async () => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST", SINGUP_API, {
                firstName,
                lastName,
                email,
                password,
                accountType,
                confirmPassword,
                otp,
            });
            console.log("SingUp API response", response);
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("SingUp Successfully");
            navigate('/login')
        } catch (error) {
            console.log("Send Otp Error =", error);
            toast.error(`Signup Failed ${error.response.data.message}`)
        }
        toast.dismiss(toastId);
    }
}


export function login(email , password , navigate){
    return async ()=>{
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST", LOGIN_API,{
                email,password
            })
            console.log("Login APi Resposne..",response);

            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success("Login Successfully")
            localStorage.setItem("token", JSON.stringify(response.data.token));
            navigate("/my-tasks");
        } catch (error) {
            console.log("LOGIN api error = ",error);
            toast.error(`Login Failed =${error.response.message}`);
        }
        toast.dismiss(toastId);
    }
}

export function logout(navigate){
    console.log("LogOut Called");
    return ()=>{
        localStorage.removeItem("token")
        toast.success("Logged Out");
        navigate("/")
    }
}