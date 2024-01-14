import {Avatar, Badge, Box, Container, CssBaseline, Divider, Grid, IconButton, Link, List, Paper, ThemeProvider, Toolbar, Typography, createTheme, styled } from "@mui/material";

import React from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Footer from "../../components/footer";
import Drawer from "../../components/drawer";
import AppTopBar from "../../components/app-top-bar";
import Chart from "../../components/chart";
import { LockOutlined } from "@mui/icons-material";
import ProfileMenu from "../../components/profile-menu";
import LeftMenu from "../../components/left-menu";
  
// Theme
const defaultTheme = createTheme();

const Dashboard = ()=>{

    const [open,setOpen] = React.useState(true);
    const toggleDrawer= ()=>{
        setOpen(!open)
    }
    return(
        <>
         <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppTopBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
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
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
             <ProfileMenu/> 
          </Toolbar>
        </AppTopBar> 
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1]
            }}
          >
            <Grid container justifyContent="center" alignItems="center"  spacing={0}>
                <Typography variant="h6" style={{fontSize:"30px"}} >Zuth</Typography>
            </Grid>  
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
         <LeftMenu/>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container   maxWidth="xl" style={{ marginLeft: open ? 'auto' : 0, transition: 'margin 0.2s' }} sx={{ mt: 4, mb: 4}}>
            <Grid container spacing={3} justifyContent={"flex-end"} alignItems="center"    >
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart/>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <p>Deposit</p>
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <p>Orders</p>
                </Paper>
              </Grid>
            </Grid> 
            <Footer sx={{paddingTop:4}} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
        </>
    )
}
export default Dashboard;