// src/pages/Users.js
import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

const Users = () => {
  const [open, setOpen] = useState(false);
  const [refresh, setRefresh] = useState(0);

  const handleAddUser = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserAdded = () => {
    setRefresh((prev) => prev + 1);
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <h2>Users</h2>
        <Button variant="contained" color="primary" onClick={handleAddUser}>
          Add User
        </Button>
      </Box>
      <UserList refresh={refresh} />
      <UserForm
        open={open}
        handleClose={handleClose}
        onUserAdded={handleUserAdded}
      />
    </div>
  );
};

export default Users;
