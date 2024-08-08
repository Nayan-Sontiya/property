// src/pages/Properties.js
import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import PropertyList from "../components/Property/PropertyList";
import PropertyForm from "../components/Property/PropertyForm";

const Properties = () => {
  const [open, setOpen] = useState(false);
  const [refresh, setRefresh] = useState(0);

  const handleAddProperty = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePropertyAdded = () => {
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
        <h2>Properties</h2>
        <Button variant="contained" color="primary" onClick={handleAddProperty}>
          Add Property
        </Button>
      </Box>
      <PropertyList refresh={refresh} />
      <PropertyForm
        open={open}
        handleClose={handleClose}
        onPropertyAdded={handlePropertyAdded}
      />
    </div>
  );
};

export default Properties;
