// src/services/propertyService.js
import axios from "axios";

const API_URL = "https://66b39d2b7fba54a5b7ed9b3c.mockapi.io/api/properties";

const getProperties = () => {
  return axios.get(API_URL);
};

const createProperty = (user) => {
  return axios.post(API_URL, user);
};

const updateProperty = (id, user) => {
  return axios.put(`${API_URL}/${id}`, user);
};

const deleteProperty = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export { getProperties, createProperty, updateProperty, deleteProperty };
