import { Box, Typography } from "@mui/material";

interface FooterPropso {
  sx?: React.CSSProperties;
}

const Footer = (props: FooterPropso) => {
  return (
    <Box sx={props.sx}>
      <Typography variant="body2" color="text.secondary" align="center">
        Made by <b>Zuth - {new Date().getFullYear()}</b>
        {/* {'Copyright © '}
            <Link color="inherit" href="#">
            Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'} */}
      </Typography>
    </Box>
  );
};
export default Footer;
