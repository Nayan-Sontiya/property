// src/components/UserForm.js
import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { createUser } from "../services/userService";

const UserForm = ({ open, handleClose, onUserAdded }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createUser(user);
    onUserAdded(response.data);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 3,
          bgcolor: "background.paper",
          m: "auto",
          mt: 10,
          borderRadius: 1,
          width: 300,
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          label="Phone"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Add User
        </Button>
      </Box>
    </Modal>
  );
};

export default UserForm;
