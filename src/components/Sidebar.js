// src/components/Sidebar.js
import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import routes from "../routes";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div
      style={{ width: "250px", height: "100vh", backgroundColor: "#f4f4f4" }}
    >
      <List>
        <ListItem
          button
          component={Link}
          to={routes.USERS}
          selected={location.pathname === routes.USERS}
        >
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to={routes.PROPERTIES}
          selected={location.pathname === routes.PROPERTIES}
        >
          <ListItemText primary="Properties" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
