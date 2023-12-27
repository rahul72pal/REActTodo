require('dotenv').config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

//Auth ENDpoinsts
export const endpoints = {
    SENDOTP_API: BASE_URL + "/sendotp",
    LOGIN_API: BASE_URL + "/login",
    SINGUP_API: BASE_URL + "/singup",
}

//TODOS ENDS POINTS
export const taskendpoints = {
    CREATETODD_API: BASE_URL + "/createtodo",
    GETTODD_API: BASE_URL + "/alltodos",
}