import {
  Badge,
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { ReactNode, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Footer from "../components/design/footer";
import Drawer from "../components/design/drawer";
import AppTopBar from "../components/design/app-top-bar";
import LeftMenu from "../components/menu/left-menu";
import { useNavigate } from "react-router-dom";
import { useGlobalText } from "../globals/global-text-provider";
import ThemeSwitch from "../components/controls/theme-switch";
import ProfileMenuControl from "../components/controls/profile-menu-control";
import LocalizeMenuControl from "../components/controls/localize-menu-control";
import { useTranslation } from "react-i18next";

interface MasterLayoutProps {
  children: ReactNode;
}

const MasterLayout: React.FC<MasterLayoutProps> = ({ children }) => {
  const { globalText, setGlobalText } = useGlobalText();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    setGlobalText("");
    navigate("/");
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppTopBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {t("Dashboard")}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <LocalizeMenuControl />
            <ThemeSwitch />
            <ProfileMenuControl />
          </Toolbar>
        </AppTopBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={0}
            >
              <span style={{ cursor: "pointer" }} onClick={handleClick}>
                <Typography variant="h6" style={{ fontSize: "30px" }}>
                  Zuth
                </Typography>
              </span>
            </Grid>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <LeftMenu />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container
            maxWidth="xl"
            style={{
              marginLeft: open ? "auto" : 0,
              transition: "margin 0.2s",
            }}
            sx={{ mt: 4, mb: 4 }}
          >
            {children}
            <Footer sx={{ paddingTop: 4 }} />
          </Container>
        </Box>
      </Box>
    </>
  );
};
export default MasterLayout;
