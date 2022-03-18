import axios from 'axios';
import {BACKEND_URL}  from '../../../constants/apiEndpoint';
const makeRequest=async (apiEndpoint)=>{
    const {data}=await axios({...apiEndpoint,url: `${BACKEND_URL}${apiEndpoint.url}`})
    return data;
} 
export default makeRequest;