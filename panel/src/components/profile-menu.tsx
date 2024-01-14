import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const ProfileMenu =()=>{
 
const settings = ['Profile','Logout'];
const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
 
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
 
  const handleCloseUserMenu = () => {
    setAnchorElUser(null); 
  };
  const handleMenuItemClick = (item: string) => {
    setAnchorElUser(null);  
    if(item == "Logout"){
      navigate('/login');
    }
    else if(item == "Profile"){
      
    }
  };

    return(
        <Box sx={{ flexGrow: 0,pl:"20px"}}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={()=>handleMenuItemClick(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
    )
}
export default ProfileMenu