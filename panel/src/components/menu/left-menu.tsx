import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { useGlobalText } from "../../globals/global-text-provider";

const LeftMenu = () => {
  const { globalText, setGlobalText } = useGlobalText();

  // Sample list data based on the global variable
  const listItemsA = [
    "Dashboard",
    "Orders",
    "Customers",
    "Reports",
    "Integrations",
    "Current Month",
    "Last Quarter",
    "Year End Sale",
  ];
  const listItemsB = [
    "Personal Info",
    "Data & Privacy",
    "Security",
    "Payment & Subscription",
  ];
  let contentArray;
  if (globalText === "UserProfile") {
    contentArray = listItemsB;
  } else {
    contentArray = listItemsA;
  }

  return (
    <List component="nav">
      <React.Fragment>
        {contentArray.map((item, index) => (
          <>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText key={index} primary={item} />
            </ListItemButton>
          </>
        ))}
      </React.Fragment>
    </List>
  );
};
export default LeftMenu;
