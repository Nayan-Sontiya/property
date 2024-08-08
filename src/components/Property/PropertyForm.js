// src/components/PropertyForm.js
import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { createProperty } from "../../services/propertyService";

const PropertyForm = ({ open, handleClose, onPropertyAdded }) => {
  const [property, setProperty] = useState({
    name: "",
    type: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createProperty(property);
    onPropertyAdded(response.data);
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
        <h2 className="text-center">Add Property</h2>
        <FormControl margin="normal" required>
          <InputLabel>Type</InputLabel>
          <Select name="type" value={property.type} onChange={handleChange}>
            <MenuItem value="Commercial">Commercial</MenuItem>
            <MenuItem value="Residential">Residential</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Name"
          name="name"
          value={property.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          label="Price"
          name="price"
          value={property.price}
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
          Add Property
        </Button>
      </Box>
    </Modal>
  );
};

export default PropertyForm;
