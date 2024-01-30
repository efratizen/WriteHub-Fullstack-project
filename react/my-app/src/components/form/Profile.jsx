import React, { useState, useEffect } from "react";
import "./styles.css"; // Import the CSS file
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Loader from "../Loader";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { updateUser } from "../../redux/reducers/usersReducers";

const settings = ["Profile", "Add Book", "Update Books", "Logout"];

const Profile = (props) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = new useDispatch();
  const myUser = useSelector((state) => state.user.myUser);
  const isAdmin = myUser.status === 2;
// update user exit...
  const handleLogoutOnClick = () => {
    const user = {
      ...myUser,
      id: -1
    }
    setIsLoading(true);
    setTimeout(() => {
      dispatch(updateUser(user));
      setIsLoading(false);
      props.setIsConnected(false);
      window.localStorage.setItem("user_id", 0)
    }, 2000);
  };

 useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

// Opening the profile menu
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

 // Closing the profile menu
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="form-profile-picture">
      {isLoading && <Loader></Loader>}
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0 }}>
          {myUser.id != -1 &&
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar aria-label="recipe" style={{ width: '50px', height: '50px', }}>
                  <img
                    src={`data:image/jpg;base64,${myUser.profile}`}
                    alt={`Avatar of ${myUser.profile}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}

                  />
                </Avatar>
              </IconButton>
            </Tooltip>}
          <Menu
            sx={{ mt: "45px" }}
            id="form-menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => {
                  handleCloseUserMenu();
                  if (setting === "Add Book") {
                  } else if (setting === "Logout") {
                    handleLogoutOnClick();
                  } else if (setting === "Update Books") {
                  }
                }}
              >
                <Typography textAlign="center">
                  {isAdmin && (setting === "Add Book" || setting === "Update Books")
                    ? <NavLink id="link" to={`/${setting.toLowerCase().replace(' ', '')}`} style={{ color: 'black' }}>{setting}</NavLink>
                    : (setting === "Profile" || setting === "Logout") && setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </div>
  );
};

export default Profile;

