import {
  Container,
  Grid,
  Typography,
  Divider,
  Link,
  IconButton,
} from "@mui/material";
import { Phone, Email, GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2c3e50",
        color: "#ecf0f1",
        padding: "1rem 0",
        width: "100%",
      }}
    >
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="body2">Name : Shoaib Khan</Typography>
            <Typography variant="body2">
              Total Experience : 2.5 Years{" "}
            </Typography>

            <Typography variant="body2">Stack : MERN Stack </Typography>

            <Typography variant="body2">
              Skills : HTML, CSS, Javascript, React, Node-js, MongoDB, Express{" "}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 2, // Increase the spacing here
              }}
            >
              <Phone fontSize="small" sx={{ marginRight: 1 }} />
              Phone Number : {""}
              <Link href="tel:+918830488649" underline="none" color="inherit">
                +918830488649
              </Link>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: 2, // Increase the spacing here
              }}
            >
              <Email fontSize="small" sx={{ marginRight: 1 }} />
              Email :{" "}
              <Link
                href="mailto:shoaibullakhan15@gmail.com"
                underline="none"
                color="inherit"
              >
                shoaibullakhan15@gmail.com{" "}
              </Link>
            </Typography>
          </Grid>

          <Grid>
            <IconButton
              href="https://www.linkedin.com/in/shoaib-khan-632273285"
              sx={{ marginRight: 1 }}
            >
              <LinkedIn />
            </IconButton>

            <IconButton href="https://github.com/shoaibkhan188626">
              <GitHub />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Shoaib Khan. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
