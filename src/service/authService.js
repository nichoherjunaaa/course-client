import apiInstance from "../utils/axios"

export const postSignUp = async (data) => {
    const res = await apiInstance.post("/user/sign-up", data);
    return res.data;
}
