import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers = { jwtToken: localStorage.getItem("jwtToken") || '' }


export const verifyUser = async () => axios.post('auth/getuser')

export const initialize_StepOne = async (data) => axios.post('/user/step_one', data)
export const initialize_StepTwo = async (data) => axios.post('/user/step_two', data)
export const initialize_StepThree = async (data) => axios.post('/user/step_three', data)