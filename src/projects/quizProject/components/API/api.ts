import axios from "axios";


export async function loginAPI(username: string, password: string) {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/alpha/login/", {
            username: username,
            password: password
        })
        return response.data
    } catch (e) {
        return null
    }
}

export async function registerUser(username: string, password: string, email: string) {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/alpha/register/", {
            username: username,
            password1: password,
            password2: password,
            email: email,
        })
        return response.data
    } catch (e) {
        return null
    }
}

export async function logoutAPI() {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/alpha/logout/")
        return response.data
    } catch (e) {
        console.log("error")
    }
}