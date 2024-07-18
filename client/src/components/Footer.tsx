import { Box, Container, Grid, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        bgcolor: "#333",
        color: "#fff",
        mt: 'auto', 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Company Name
            </Typography>
            <Typography variant="body2" component="p">
              A brief description of your company and what it does.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Link href="#" color="inherit">
                  Home
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  Products
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  About Us
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  Contact
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;