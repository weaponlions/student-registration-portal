import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers = { jwtToken: localStorage.getItem("jwtToken") } 

export const loginUser = async (data) => axios.post('auth/login', data)
export const signUpUser = async (data) => axios.post('auth/signup', data)

export const userInfo = async () => axios.post('user/user_info')
export const userEduc = async () => axios.post('user/user_educ')

export const initialize_StepOne = async (data) => axios.post('/user/step_one', data)
export const initialize_StepTwo = async (data) => axios.post('/user/step_two', data)
export const initialize_StepThree = async (data) => axios.post('/user/step_three', data)

export const createOrder = async (data) => axios.post('/payment/createOrder', data)

export const getCourse = async (data) => axios.get(`/course?course_category=${data.category}`)

export { axios }