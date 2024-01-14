import { Grid, Paper, createTheme } from "@mui/material";

import React from "react";
import Chart from "../components/ui-components/dashboard/chart";
import { useTranslation } from "react-i18next";
import Deposits from "../components/ui-components/dashboard/deposits";
import Orders from "../components/ui-components/dashboard/orders";

// Theme
const defaultTheme = createTheme();
const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <Grid
        container
        spacing={3}
        justifyContent={"flex-end"}
        alignItems="center"
      >
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default Dashboard;
