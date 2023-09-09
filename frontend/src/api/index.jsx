import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers = { jwtToken: localStorage.getItem("jwtToken") } 

export const loginUser = async (data) => axios.post('auth/signin', data)
export const signUpUser = async (data) => axios.post('auth/signup', data)

export const userInfo = async () => axios.post('user/user_info')
export const getCourses = async ({category}) => axios.post(`course/?${category && `category=${category}`}`)
export const getCategories = async () => axios.post(`course/category`)

export const initialize_StepOne = async (data) => axios.post('/user/step_one', data)
export const initialize_StepTwo = async (data) => axios.post('/user/step_two', data)
export const initialize_StepThree = async (data) => axios.post('/user/step_three', data)

export const createOrder = async (data) => axios.post('/payment/createOrder', data)

export { axios }