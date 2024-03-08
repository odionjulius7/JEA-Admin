import axios from 'axios';
// import { config } from "../../utils/axiosconfig";
import { base_url } from '../../utils/baseUrl';
import { generateAxiosConfig } from '../../utils/axiosconfig';

// post config
const generateAxiosConfig2 = (token) => ({
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  },
});
// Properties
const allProperty = async (token) => {
  const config = generateAxiosConfig(token);
  // const response = await axios.get(`${base_url}loan/admin?deleted=false`, config);
  const response = await axios.get(`${base_url}property/all`, config);
  //   console.log(response);
  return response?.data;
};
const getAproperty = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  const response = await axios.get(`${base_url}property/${ids.id}`, config);
  // console.log(response);
  return response.data;
};

const postProperty = async (data) => {
  const config = generateAxiosConfig2(data.token);

  const response = await axios.post(`${base_url}property`, data.formData, config);

  return response.data;
};

const updateProperty = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  try {
    const response = await axios.put(`${base_url}property/${ids.id}`, ids.data, config);
    return response.data?.data;
  } catch (error) {
    console.log(error);
    // Handle the error as needed
    return null;
  }
};

const deleteProperty = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  const response = await axios.delete(`${base_url}property/${ids.id}`, config);
  return response.data;
};

// Projects
const allProject = async (token) => {
  const config = generateAxiosConfig(token);
  // const response = await axios.get(`${base_url}loan/admin?deleted=false`, config);
  const response = await axios.get(`${base_url}project/all`, config);
  //   console.log(response);
  return response?.data;
};

const getAproject = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  const response = await axios.get(`${base_url}project/${ids.id}`, config);
  // console.log(response);
  return response.data;
};

const updateProj = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  try {
    const response = await axios.put(`${base_url}project/${ids.id}`, ids.data, config);
    return response.data?.data;
  } catch (error) {
    console.log(error);
    // Handle the error as needed
    return null;
  }
};
const updateFeaturedProj = async (ids) => {
  const config = generateAxiosConfig(ids.token);

  try {
    const response = await axios.put(
      `${base_url}project/featured/${ids.id}`,
      ids.formData, // Pass 'formData' directly
      config
    );
    return response.data?.data;
  } catch (error) {
    console.log(error);
    // Handle the error as needed
    return null;
  }
};

const deleteProj = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  const response = await axios.delete(`${base_url}project/${ids.id}`, config);
  return response.data;
};

const postProj = async (data) => {
  const config = generateAxiosConfig2(data.token);

  const response = await axios.post(`${base_url}project`, data.formData, config);

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

const getaRequest = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  const response = await axios.get(`${base_url}property/request/${ids.id}`, config);
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
const getABlog = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  const response = await axios.get(`${base_url}blog/${ids.id}`, config);
  // console.log(response);
  return response.data;
};

const postBlog = async (data) => {
  const config = generateAxiosConfig2(data.token);

  const response = await axios.post(`${base_url}blog`, data.formData, config);

  return response.data;
};

const propertyService = {
  allProperty,
  getAproperty,
  postProperty,
  updateProperty,
  deleteProperty,
  //
  allProject,
  getAproject,
  postProj,
  updateProj,
  deleteProj,
  updateFeaturedProj,
  //
  allRequest,
  getaRequest,
  //
  allBlog,
  getABlog,
  postBlog,
};

export default propertyService;
