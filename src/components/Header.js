import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inheriDefa"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React課題③
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <Button variant="text" color="inherit">
            Login
          </Button>
          <Button variant="text" color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
