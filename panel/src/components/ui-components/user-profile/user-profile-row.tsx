import Grid from "@mui/material/Grid";

interface UserProfileRowProps {
  label_name: string;
  label_value: string;
}

const UserProfileRow = (Props: UserProfileRowProps) => {
  return (
    <Grid
      container
      spacing={2}
      style={{ marginBottom: "10px", marginTop: "3px" }}
    >
      <Grid container item xs={2} direction="column">
        <label>{Props.label_name}</label>
      </Grid>
      <Grid container item xs={6} direction="column">
        <label>{Props.label_value} </label>
      </Grid>
    </Grid>
  );
};
export default UserProfileRow;
