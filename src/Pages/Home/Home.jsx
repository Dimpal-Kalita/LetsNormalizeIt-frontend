import {
  Grid,
  Card,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  Button,
  Fab,
  Link,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";
// import { Link } from "react-router-dom";

import BotChat from "../Bot/Bot";

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    borderRadius: 10,
    boxShadow: "#e5c9e4",
    transition: "0.3s",
    padding: 16,
    marginBottom: 70,
    cursor: "pointer",
    marginTop: 70,
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 11px rgba(33,33,33,.2)",
    },
  },
  avatar: {
    marginRight: "12px",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Fab
        color="secondary"
        aria-label="Chat"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
        }}
      >
        <BotChat />
      </Fab>

      <Grid autoFocus>
        <img
          src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689340689/LetsNormalizeIt_Articles/gfdbsomovmgcipqwgbmu.gif"
          alt="bgImage"
          width="100%"
        ></img>
      </Grid>

      <div style={{ padding: 3 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4} className={classes.cardContainer}>
            <Card sx={{ maxWidth: 345 }} className={classes.cardStyle}>
              <CardContent>
                <Avatar className={classes.avatar}>
                  <MaleIcon />
                </Avatar>
                <Typography variant="h5" component="div" fontFamily="Poppins, sans-serif">
                  Male
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontFamily="Poppins, sans-serif"
                >
                  Let’s be honest, sex can get messy. It’s easy to forget about
                  cleanliness when you’re in the moment, but being aware of your hygiene
                  before, during, and after sex can minimize the risk of STIs and other
                  health concerns. Plus, being clean is just sexy!.
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Share</Button> */}
                <Button size="small">
                  <Link
                    href="/male"
                    color="inherit"
                    underline="none"
                    fontFamily="Poppins, san-serif"
                  >
                    Learn More
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} className={classes.cardContainer}>
            <Card sx={{ maxWidth: 345 }} className={classes.cardStyle}>
              <CardContent>
                <Avatar className={classes.avatar}>
                  <FemaleIcon />
                </Avatar>
                <Typography variant="h5" component="div" fontFamily="Poppins, sans-serif">
                  Female
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontFamily="Poppins, sans-serif"
                >
                  Just like menstruation, vaginal hygiene is a taboo subject in India.
                  Many women till date refrain from talking or sharing tips on how to
                  maintain feminine hygiene. It is important to know about vaginal hygiene
                  to keep your genitals clean and your reproductive tract healthy.
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Share</Button> */}
                <Button size="small">
                  <Link
                    href="/female"
                    color="inherit"
                    underline="none"
                    fontFamily="Poppins, san-serif"
                  >
                    Learn More
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} className={classes.cardContainer}>
            <Card sx={{ maxWidth: 345 }} className={classes.cardStyle}>
              <CardContent>
                <Avatar className={classes.avatar}>
                  <TransgenderIcon />
                </Avatar>
                <Typography variant="h5" component="div" fontFamily="Poppins, sans-serif">
                  Transgender
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontFamily="Poppins, sans-serif"
                >
                  Discovering your sexuality can be really exciting, and you may be
                  exploring new things, or with new parts of your body. Wherever you are
                  in your transition, and whether you have decided to have surgery or not,
                  you are entitled to have sex that is safe and enjoyable.
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Share</Button> */}
                <Button size="small">
                  <Link
                    href="/transgender"
                    color="inherit"
                    underline="none"
                    fontFamily="Poppins, san-serif"
                  >
                    Learn More
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
