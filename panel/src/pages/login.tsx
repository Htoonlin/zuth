import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { couldStartTrivia } from "typescript";

const LogIn =()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {

    navigate('/');
  };
    return (
        <>
        <Container maxWidth="xs">
            <CssBaseline/>
             <Box
             display="flex"
             flexDirection="column"
             maxWidth="400"
             alignItems="center"
             justifyContent="center"
             margin="auto"
             marginTop={5}
             padding={3}
             borderRadius={5}
             boxShadow={"5px 5px 10px #ccc"}
             sx={{
                ":hover":{
                    boxShadow:"10px 10px 20px #ccc"
                }
             }}
            >
                <Typography variant="h4">
                    Log In
                </Typography>
                <Box sx={{mt:1}}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoFocus
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    />
                    <Button
                    fullWidth
                    variant="contained"
                    sx={{mt:3,mb:2}}
                    onClick={handleLogin}
                    >
                        LogIn
                    </Button>
                    <Grid container justifyContent={"flex-end"} >
                            <Grid item >
                            <Link to="/register">Don't have an account? Register</Link>
                            </Grid>
                    </Grid>
                </Box>
             </Box>

        </Container>
        
        </>

    )
}
export default LogIn;