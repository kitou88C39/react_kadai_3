//import React, { useContext } from "react";
import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
//import { auth } from "../firebase";
// import { useHistory } from "react-router-dom";
// import { AuthContext } from "../auth/AuthProvider";

const Header = () => {
  //   const { currentUser } = useContext(AuthContext);
  //   const history = useHistory();
  //    const handleSignOut = async () => {
  //      try {
  //        await auth.signOut();
  //        history.push("/Login");
  //      } catch (err) {
  //        alert(err.message);
  //      }
  //    };
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
          {/* <Button variant="text" color="inherit">
            Login
          </Button> */}
          <Button variant="text" color="inherit">
            SignOut
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
