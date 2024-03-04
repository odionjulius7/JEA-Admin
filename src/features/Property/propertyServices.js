import axios from 'axios';
// import { config } from "../../utils/axiosconfig";
import { base_url } from '../../utils/baseUrl';
import { generateAxiosConfig } from '../../utils/axiosconfig';

// Properties
const allProperty = async (token) => {
  const config = generateAxiosConfig(token);
  // const response = await axios.get(`${base_url}loan/admin?deleted=false`, config);
  const response = await axios.get(`${base_url}property/all`, config);
  //   console.log(response);
  return response?.data;
};

// Projects
const allProject = async (token) => {
  const config = generateAxiosConfig(token);
  // const response = await axios.get(`${base_url}loan/admin?deleted=false`, config);
  const response = await axios.get(`${base_url}project/all`, config);
  //   console.log(response);
  return response?.data;
};
const getAproperty = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  const response = await axios.get(`${base_url}property/${ids.id}`, config);
  // console.log(response);
  return response.data;
};

// Requests
const allRequest = async (token) => {
  const config = generateAxiosConfig(token);
  // const response = await axios.get(`${base_url}loan/admin?deleted=false`, config);
  const response = await axios.get(`${base_url}property/request/all`, config);
  // console.log(response);
  return response?.data;
};

const getAproject = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  const response = await axios.get(`${base_url}project/${ids.id}`, config);
  // console.log(response);
  return response.data;
};

// Blogs
const allBlog = async (token) => {
  const config = generateAxiosConfig(token);
  // const response = await axios.get(`${base_url}loan/admin?deleted=false`, config);
  const response = await axios.get(`${base_url}blog`, config);
  // console.log(response);
  return response?.data;
};

const propertyService = {
  allProperty,
  getAproperty,
  //
  allProject,
  getAproject,
  //
  allRequest,
  //
  allBlog,
};

export default propertyService;
