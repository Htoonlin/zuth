import { Button, Divider, Grid, Paper } from "@mui/material";
import UserProfileRow from "../components/ui-components/user-profile/user-profile-row";

const UserProfile = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        justifyContent={"flex-end"}
        alignItems="center"
      >
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <div>
              <h2>Personal Information</h2>
              <UserProfileRow
                label_name="Name"
                label_value="Zaw Zaw"
              ></UserProfileRow>
              <Divider />
              <UserProfileRow
                label_name="Birthday"
                label_value="March 21, 1989"
              ></UserProfileRow>
              <Divider />
              <UserProfileRow
                label_name="Gender"
                label_value="Male"
              ></UserProfileRow>
              <Divider />
            </div>
            <div>
              <h2>Contact Information</h2>
              <UserProfileRow
                label_name="Email"
                label_value="mgzaw@gmail.com,john@gmail.com"
              ></UserProfileRow>
              <Divider />
              <UserProfileRow
                label_name="Phone"
                label_value="+65 98192029"
              ></UserProfileRow>
              <Divider />
              <UserProfileRow
                label_name="Birthday"
                label_value="March 21, 1989"
              ></UserProfileRow>
              <Divider />
              <UserProfileRow
                label_name="Gender"
                label_value="Male"
              ></UserProfileRow>
              <Divider />
            </div>
            <Grid
              container
              spacing={3}
              justifyContent={"flex-end"}
              alignItems="center"
              sx={{ paddingTop: "50px" }}
            >
              <Button variant="contained">Edit Profile</Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default UserProfile;
