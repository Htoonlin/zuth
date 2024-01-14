import { ChangeEvent, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useTheme } from "../../contexts/theme-context";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  let theme_stage = theme === "light" ? false : true;
  const [isChecked, setIsChecked] = useState(theme_stage); // need to save check stage;
  const changeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    toggleTheme();
  };
  return (
    <FormControlLabel
      value="start"
      control={
        <Switch
          color="warning"
          checked={isChecked}
          onChange={changeTheme}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      label="Change Theme"
      labelPlacement="start"
    />
  );
};
export default ThemeSwitch;
