// src/services/userService.js
import axios from "axios";

const API_URL = "https://66b39d2b7fba54a5b7ed9b3c.mockapi.io/api/users";

const getUsers = () => {
  return axios.get(API_URL);
};

const createUser = (user) => {
  return axios.post(API_URL, user);
};

const updateUser = (id, user) => {
  return axios.put(`${API_URL}/${id}`, user);
};

const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export { getUsers, createUser, updateUser, deleteUser };
