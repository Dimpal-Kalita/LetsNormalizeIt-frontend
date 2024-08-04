import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  LinearProgress,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import images from "../../db/images.json";
import images2 from "../../db/images2.json";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "40vh",
    marginTop: "5rem",
    padding: 2,
  },
  sliderContainer: {
    width: "70%",
    position: "relative",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // height: "64rem",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.3)",
    },
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  navigation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "100%",
  },
  arrowButton: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
  },
  galleryContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    height: "14rem",
    overflow: "hidden",
    position: "relative",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.3)",
    },
  },
  image3: {
    width: "100%",
    height: "auto",
  },
  progressBar: {
    position: "sticky",
    top: 65,
    left: 100,
    right: 100,
    zIndex: 1000,
  },
  icongrid: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "0.1rem",
  },
}));

const FemaleArticle = () => {
  const headingStyle1 = {
    marginTop: "6rem",
    marginLeft: "3rem",
  };
  const headingStyle2 = {
    marginTop: "2rem",
    marginLeft: "3rem",
  };
  const classes = useStyles();

  // FAQ section starts
  const questionStyle = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    fontSize: "1rem",
  };

  const answerStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "1rem",
  };
  const faqData = [
    {
      id: 1,
      question: "How often should a woman get a pelvic exam and Pap test?",
      answer:
        "A Pap test is recommended for women age 21 and older. The American College of Obstetrics and Gynecology recommends routine screening for women ages 21 to 65 years every three years. More frequent Pap tests may be needed if an abnormal test result is found or if you are at high risk of cervical cancer. Combining a Pap test with a human papillomavirus (HPV) test can safely extend the interval between cervical cancer screenings from three years to five years in many women between the ages of 30-65, according to the U.S. Preventive Services Task Force (USPSTF).",
    },
    {
      id: 2,
      question: "Can a woman get pregnant while breastfeeding?",
      answer:
        "Yes. Even though breastfeeding may suppress or delay menstruation, you can still get pregnant. Ovulation will occur before you start having menstrual periods again, so follow your doctor's recommendation on the appropriate birth control method to use.",
    },
    {
      id: 3,
      question: "What should women do when they forget their birth control pills?",
      answer:
        "If you forget to take a birth control pill, take it as soon as you remember. If you don't remember until the next day, go ahead and take two pills that day. If you forget to take your pills for two days, take two pills the day you remember and two pills the next day. You will then be back on schedule. If you miss more than two pills, call your health care provider for instructions. Those instructions may be to take one pill daily until Sunday and then start a new pack or to discard the rest of the pill pack and start over with a new pack that same day.",
    },
    {
      id: 4,
      question: "Can a woman get pregnant using the withdrawal method of birth control?",
      answer:
        "ulling out before the man ejaculates, known as the withdrawal method, is not a foolproof method for birth control. Some ejaculate (fluid that contains sperm) may be released before the man actually climaxes. In addition, some men may not have the willpower or be able to withdraw in time.",
    },
  ];

  // image slider

  const [currentImage, setCurrentImage] = React.useState(images2[0]);
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  const handlePrevImage = () => {
    const currentIndex = images2.findIndex((image) => image.id === currentImage.id);
    const prevIndex = (currentIndex - 1 + images2.length) % images2.length;
    setCurrentImage(images2[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = images2.findIndex((image) => image.id === currentImage.id);
    const nextIndex = (currentIndex + 1) % images2.length;
    setCurrentImage(images2[nextIndex]);
  };

  // linear progress bar
  const [scrollProgress, setScrollProgress] = useState(0);
  const pageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const windowHeight = scrollHeight - clientHeight;
      const progress = scrollTop / windowHeight || 0;
      setScrollProgress(progress);
    };

    const throttledHandleScroll = throttle(handleScroll, 100);

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Throttle function to limit the scroll event firing frequency
  const throttle = (callback, delay) => {
    let previousCall = Date.now();
    return (...args) => {
      const time = Date.now();

      if (time - previousCall >= delay) {
        previousCall = time;
        callback(...args);
      }
    };
  };

  const isBigScreen = useMediaQuery("(min-width: 600px)");

  return (
    <Box>
      {isBigScreen && (
        <Grid
          style={{ position: "fixed", top: "3.9rem", left: 0, right: 0, zIndex: 1050 }}
        >
          <LinearProgress variant="determinate" value={scrollProgress * 100} />
        </Grid>
      )}
      <div ref={pageRef}>
        <Typography
          variant="h3"
          style={headingStyle1}
          fontFamily="Montserrat"
          fontWeight="bold"
          color="black"
        >
          Introduction
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="1rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          We as a developer team of <strong>LetsNormalizeIt</strong>, have a goal of
          making resources available in one place for better sex education. The website
          provides people with the knowledge, skills, and motivation they need to make
          healthy sex and sexuality decisions.
        </Typography>
        <Typography
          variant="h3"
          marginLeft="3rem"
          marginTop="1rem"
          marginRight="1rem"
          fontFamily="Roboto"
          color="#49454fbd"
          fontSize="3rem"
          fontWeight="600"
        >
          Why sexual hygiene and awareness is important?
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="1rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          There are two major reasons why maintaining good sexual hygiene is so important
          for your overall health. For starters, it lowers the risks of acquiring
          infections down there, which can lead to more serious problems like infertility.
          Second, it reduces the risk of developing a wide range of sexually transmitted
          infections. The majority of people learn about sexuality and sex at a young age.
          You could talk to your parents, siblings, teachers, or mentors about it. You
          might also find it on your own. Gender and genitalia are discussed. You learn
          what sex is and the dangers it poses. Pregnancy, sexually transmitted diseases
          (STIs), and sexual abuse are all risks. It is critical to gain as much knowledge
          about sex as possible. You&apos;ll be better prepared to make excellent
          decisions if you&apos;re well-informed.
        </Typography>

        {/* problem */}

        <div className={classes.root}>
          <Grid style={{ display: "flex", flexDirection: "row" }} container spacing={2}>
            {images.map((image) => (
              <Grid item xs={12} sm={6} md={4} key={image.id}>
                <div className={classes.imageContainer}>
                  <img src={image.src} alt={image.alt} className={classes.image} />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>

        <Typography
          variant="h4"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Tips for a positive body change
        </Typography>

        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="1rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          If you’re unhappy with your body, whether it’s the size of your penis or the
          look of any other part of you, try these helpful tips for feeling better about
          yourself:
          <li>
            Focus on the characteristics and body parts you do like, such as broad
            shoulders or a nice smile.
          </li>
          <li>
            Maintain a healthy weight and incorporate strength training into your exercise
            routine. If you look fit and healthy, you may feel better about yourself.
          </li>
          <li>
            Don’t become consumed by penis size. You can be a satisfying sexual partner
            regardless of the size of your penis
          </li>
          <li>
            Don’t compare yourself to athletes, models, and actors. You’ll develop an
            unhealthy and unrealistic image of what is normal and how you should look.
          </li>
          <li>
            Spend more time and energy on pursuits you find rewarding, whether it’s
            sports, hobbies, traveling, or other activities. Lasting self-esteem comes
            from nonphysical traits, such as creativity, intelligence, and your values.
          </li>
        </Typography>

        <div className={classes.root}>
          <div className={classes.sliderContainer}>
            <div
              className={classes.imageContainer}
              onClick={() => handleImageClick(currentImage)}
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className={classes.image}
              />
            </div>
            <div className={classes.navigation}>
              <Button onClick={handlePrevImage} className={classes.arrowButton}>
                <ArrowBackIos />
              </Button>
              <Button onClick={handleNextImage} className={classes.arrowButton}>
                <ArrowForwardIos />
              </Button>
            </div>
          </div>
        </div>
        <Divider style={{ marginTop: "2rem" }} />
        {/* masturbation */}
        <Typography
          variant="h4"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Masturbation
        </Typography>

        <Typography
          variant="h5"
          style={{ marginTop: "1rem", marginLeft: "3rem" }}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Side effects of masturbation
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="1rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          <li>Masturbation doesn’t have any harmful side effects.</li>
          <li>
            However, some people may feel guilty about masturbating or have issues with
            chronic masturbation.
          </li>
        </Typography>

        <Typography
          variant="h5"
          style={{ marginTop: "1rem", marginLeft: "3rem" }}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Masturbation and guilt
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="1rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          <li>
            Some people may feel guilty about masturbating because of cultural, spiritual,
            or religious beliefs.
          </li>
          <li>
            Masturbation is neither wrong nor immoral, but you may still hear messages
            that self-pleasure is “dirty” and “shameful.”
          </li>
        </Typography>

        <Typography
          variant="h5"
          style={{ marginTop: "1rem", marginLeft: "3rem" }}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Addiction to Masturbation
        </Typography>

        {/* important points highlighted (not able to align) */}
        {/* points */}
        <Box
          bgcolor="#4285f459"
          p={2}
          borderRadius={4}
          width="95%"
          marginLeft="2rem"
          marginRight="1rem"
        >
          <Grid className={classes.icongrid}>
            <PriorityHighIcon className={classes.icon} />
            <Typography
              variant="h6"
              color="textSecondary"
              fontFamily="Poppins, sans-serif"
            >
              Point1
            </Typography>
          </Grid>
          <Typography variant="body1" fontFamily="Poppins, sans-serif">
            Some people can and do develop an addiction to masturbation. You may be
            spending too much time masturbating if masturbation causes you to.
          </Typography>
        </Box>
        <Box
          bgcolor="#3cba545c"
          p={2}
          borderRadius={4}
          width="95%"
          marginLeft="2rem"
          marginTop="1rem"
          marginRight="1rem"
        >
          <Grid className={classes.icongrid}>
            <PriorityHighIcon className={classes.icon} />
            <Typography
              variant="h6"
              color="textSecondary"
              fontFamily="Poppins, sans-serif"
            >
              Point2
            </Typography>
          </Grid>
          <Typography variant="body1" fontFamily="Poppins, sans-serif">
            If you&apos;re worried you may have an addiction to masturbation, speak with
            your doctor or a counselor about ways to cut down on masturbating.
          </Typography>
        </Box>
        <Box
          bgcolor="#f4c20d40"
          p={2}
          borderRadius={4}
          width="95%"
          marginLeft="2rem"
          marginTop="1rem"
          marginRight="1rem"
        >
          <Grid className={classes.icongrid}>
            <PriorityHighIcon className={classes.icon} />
            <Typography
              variant="h6"
              color="textSecondary"
              fontFamily="Poppins, sans-serif"
            >
              Point3
            </Typography>
          </Grid>
          <Typography variant="body1" fontFamily="Poppins, sans-serif">
            Talk therapy can help you manage your addiction. You could also cut down by
            replacing masturbation with other activities.
          </Typography>
        </Box>

        {/* smaller points */}
        <Typography
          variant="h5"
          style={{ marginTop: "1rem", marginLeft: "3rem", marginRight: "2rem" }}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Next time you have an urge to masturbate, try:
        </Typography>
        <Box
          bgcolor="#3cba541f"
          p={1}
          borderRadius={2}
          width="95%"
          marginLeft="2rem"
          marginRight="10rem"
          marginTop="0.5rem"
        >
          <Typography variant="body1" marginLeft={2} fontFamily="Poppins, sans-serif">
            going for a run
          </Typography>
        </Box>
        <Box
          bgcolor="#605d621a"
          p={1}
          borderRadius={2}
          width="95%"
          marginLeft="2rem"
          marginRight="10rem"
          marginTop="0.5rem"
        >
          <Typography variant="body1" marginLeft={2} fontFamily="Poppins, sans-serif">
            writing in a journal
          </Typography>
        </Box>
        <Box
          bgcolor="#8a64a41f"
          p={1}
          borderRadius={2}
          width="95%"
          marginLeft="2rem"
          marginRight="10rem"
          marginTop="0.5rem"
        >
          <Typography variant="body1" marginLeft={2} fontFamily="Poppins, sans-serif">
            spending time with friends
          </Typography>
        </Box>
        <Box
          bgcolor="#3cba541f"
          p={1}
          borderRadius={2}
          width="95%"
          marginLeft="2rem"
          marginRight="10rem"
          marginTop="0.5rem"
        >
          <Typography variant="body1" marginLeft={2} fontFamily="Poppins, sans-serif">
            going for a walk
          </Typography>
        </Box>
        <Box
          bgcolor="#f4c20d24"
          p={1}
          borderRadius={2}
          width="95%"
          marginLeft="2rem"
          marginRight="10rem"
          marginTop="0.5rem"
        >
          <Typography variant="body1" marginLeft={2} fontFamily="Poppins, sans-serif">
            skip your chores or daily activities
          </Typography>
        </Box>
        <Box
          bgcolor="#4285f414"
          p={1}
          borderRadius={2}
          width="95%"
          marginLeft="2rem"
          marginRight="10rem"
          marginTop="0.5rem"
        >
          <Typography variant="body1" marginLeft={2} fontFamily="Poppins, sans-serif">
            {" "}
            miss work or school
          </Typography>
        </Box>
        <Box
          bgcolor="#f4428114"
          p={1}
          borderRadius={2}
          width="95%"
          marginLeft="2rem"
          marginRight="10rem"
          marginTop="0.5rem"
        >
          <Typography variant="body1" marginLeft={2} fontFamily="Poppins, sans-serif">
            cancel plans with friends or family
          </Typography>
        </Box>
        <Box
          bgcolor="#605d621a"
          p={1}
          borderRadius={2}
          width="95%"
          marginLeft="2rem"
          marginRight="10rem"
          marginTop="0.5rem"
        >
          <Typography variant="body1" marginLeft={2} fontFamily="Poppins, sans-serif">
            miss important social events
          </Typography>
        </Box>

        {/* masturbation-myths */}
        <Typography
          variant="h4"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Debunking other masturbation myths
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="0.5rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          Perhaps the most common myth about masturbation is that it&apos;s not normal.
          But up to 90 percent of men and 80 percent of women claim that they&apos;ve
          masturbated at some point in their life.<br></br>
          Another common myth is that masturbation can make you go blind or start growing
          hair on your palms. This is also false. Some evidence even shows that
          masturbation can have physical benefits.
        </Typography>
        {/* images */}
        <div className={classes.root}>
          <Grid style={{ display: "flex", flexDirection: "row" }} container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197243/LetsNormalizeIt_Articles/ewxflkcsddfkoubobfdh.jpg"
                  alt="Image1"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197243/LetsNormalizeIt_Articles/nyz3nygxbanorrkq0bzw.png"
                  alt="Image2"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197243/LetsNormalizeIt_Articles/wob82la5cvyzsihh4sfu.jpg"
                  alt="Image3"
                  className={classes.image}
                />
              </div>
            </Grid>
          </Grid>
        </div>

        <Divider style={{ marginTop: "0.5rem" }} />
        {/* Female section starts */}
        <Typography
          variant="h2"
          style={{ marginTop: "2rem", marginLeft: "3rem", marginRight: "2rem" }}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Female
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="1rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          Genital organs play an important role in a woman’s overall health and hygiene
          plays a major role in safeguarding these body parts. The vagina is a closed
          muscular canal that extends from the vulva (opening of the female genital area)
          to the neck of the uterus (cervix) and it is also known as the birth canal,
          which connects the cervix via the uterus.
        </Typography>

        <Typography
          variant="h4"
          marginTop="2rem"
          marginLeft="3rem"
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Vaginal Discharge and their meanings
        </Typography>
        <Typography
          variant="h5"
          marginTop="1rem"
          marginLeft="3rem"
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Types of Vaginal Discharge
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="1rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          There are several different types of vaginal discharge. These types are
          categorized based on their color and consistency. Some types of discharge are
          normal. Others may indicate an underlying condition that requires treatment.
        </Typography>

        <Typography
          variant="h6"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          White
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="1rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          A bit of white discharge, especially at the beginning or end of your menstrual
          cycle, is normal. However, if the discharge is accompanied by itching and has a
          thick, cottage cheese-like consistency or appearance, it’s not normal and needs
          treatment. This type of discharge may be a sign of a yeast infection.
        </Typography>

        <Typography
          variant="h6"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Clear and watery
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="1rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          A clear and watery discharge is perfectly normal. It can occur at any time of
          the month. It may be especially heavy after exercise.
        </Typography>

        <Typography
          variant="h6"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Clear and stretchy
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="1rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          When discharge is clear but stretchy and mucous-like, rather than watery, it
          indicates that you are likely ovulating. This is a normal type of discharge.
        </Typography>

        <Typography
          variant="h6"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Brown or bloody
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="1rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          Brown or bloody discharge is usually normal, especially when it occurs during or
          right after your menstrual cycle. A late discharge at the end of your period can
          look brown instead of red. You may also experience a small amount of bloody
          discharge between periods. This is called spotting. If spotting occurs during
          the normal time of your period and you’ve recently had sex without protection,
          this could be a sign of pregnancy. Spotting during an early phase of pregnancy
          can be a sign of miscarriage, so it should be discussed with your OB-GYN. In
          rare cases, brown or bloody discharge can be a sign of endometrial or cervical
          cancer. It could be other problems such as fibroids or other abnormal growths.
          This is why it’s important to get a yearly pelvic exam and Pap smear. Your
          gynecologist will check for cervical abnormalities during these procedures.
        </Typography>

        <Typography
          variant="h6"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Yellow or green
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="1rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          A yellow or green discharge, especially when it’s thick, chunky, or accompanied
          by an unpleasant smell, isn’t normal. This type of discharge may be a sign of
          the infection trichomoniasis. It’s commonly spread through sexual intercourse.
        </Typography>

        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="2rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          When to seek medical help If you have unusual discharge alongside certain other
          symptoms, see your doctor as soon as possible. The symptoms to watch out for
          include:
          <li>fever</li>
          <li>pain in the abdomen</li>
          <li>unexplained weight loss</li>
          <li>fatigue</li>
          <li>increased urination</li>
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginTop="2rem"
          marginRight="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          If you have any concerns regarding whether a discharge is normal, make an
          appointment to see your doctor. Home care for vaginal discharge To prevent
          infections, practice good hygiene and wear breathable cotton underwear. Don’t
          use douches, as they can make discharge worse by removing useful bacteria. Also,
          practice safe sex and use protection to avoid STIs. To decrease the likelihood
          of yeast infections when taking antibiotics, eat yogurt that contains live and
          active cultures. If you know you have a yeast infection, you can also treat it
          with an over-the-counter yeast infection cream or suppository.
        </Typography>

        <div className={classes.root} style={{ marginTop: "1rem" }}>
          <Grid style={{ display: "flex", flexDirection: "row" }} container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer3}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197245/LetsNormalizeIt_Articles/rofatz3t1z28wfvauqou.png"
                  alt="Image1"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer3}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197245/LetsNormalizeIt_Articles/edzcnk5alnlmhckj8yxd.png"
                  alt="Image2"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer3}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197245/LetsNormalizeIt_Articles/v9dzlphckqs4x8plxt4a.png"
                  alt="Image3"
                  className={classes.image}
                />
              </div>
            </Grid>
          </Grid>
        </div>

        <Divider style={{ marginTop: "0.5rem" }} />

        <Typography
          variant="h4"
          marginTop="2rem"
          marginLeft="3rem"
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Reproductive System
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginRight="1rem"
          marginTop="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          Reproductive side effects of when your body is adjusting to oral, inserted, and
          patch contraceptives include:
          <li>loss of menstruation (amenorrhea) or extra bleeding</li>
          <li>some bleeding or spotting between periods</li>
          <li>vaginal irritation</li>
          <li>breast tenderness</li>
          <li>breast enlargement</li>
          <li>change in your sex drive</li>
          Serious but uncommon side effects include heavy bleeding or bleeding that goes
          on for more than a week. Hormonal birth controls may slightly raise the risk of
          cervical cancer, although researchers are unsure if this is due to the
          medication itself or if it’s simply due to an increased risk of HPV exposure
          from having sex.{" "}
          <a
            href="https://www.healthline.com/health/birth-control-effects-on-body"
            target="blank"
          >
            https://www.healthline.com/health/birth-control-effects-on-body
          </a>
        </Typography>
        <div className={classes.root} style={{ marginTop: "1rem" }}>
          <Grid style={{ display: "flex", flexDirection: "row" }} container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer3}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197245/LetsNormalizeIt_Articles/bdbvclnrmqhssk08wkym.jpg"
                  alt="Image1"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer3}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197245/LetsNormalizeIt_Articles/smdhl03s0qulyfuioe0o.webp"
                  alt="Image2"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer3}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197245/LetsNormalizeIt_Articles/eroeg47h3whavlxkgfca.jpg"
                  alt="Image3"
                  className={classes.image}
                />
              </div>
            </Grid>
          </Grid>
        </div>

        <Divider style={{ marginTop: "0.5rem" }} />

        <Typography
          variant="h4"
          marginTop="2rem"
          marginLeft="3rem"
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          The Effects of Hormonal Birth Control on Your Body
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginRight="1rem"
          marginTop="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          Birth control pills and patches are dispensed only with a prescription.
          Hormone-based contraceptives are available in many forms, including:
          <li>
            pills (or oral contraceptives): The key difference between brands are the
            amounts of estrogen and progestin in them — this is why some women switch
            brands if they think they’re getting too little or too much hormones, based on
            the symptoms experienced. The pill must be taken every day to prevent
            pregnancy.
          </li>
          <li>
            patch: The patch also contains estrogen and progestin, but is placed on the
            skin. Patches must be changed once a week for full effect.
          </li>
          <li>
            ring: Similar to the patch and pill, the ring also releases estrogen and
            progestin into the body. The ring is worn inside the vagina so that the
            vaginal lining can absorb the hormones. Rings must be replaced once a month.
          </li>
          <li>
            birth control shot (Depo-Provera): The shot contains only progestin, and is
            administered every 12 weeks at your doctor’s office. According to Options for
            Sexual Health, the effects of the birth control shot can last up to a year
            after you stop taking it.
          </li>
          <li>
            intrauterine devices (IUDs): There are IUD’s both with and without hormones.
            In ones that release hormones, they can contain progesterone. IUD’s are
            inserted into your uterus by your doctor and must be changed every 3 to 10
            years, depending on the type.
          </li>
          <li>
            implant: The implant contains progestin that releases through the thin rod
            into your arm. It’s placed under the skin on the inside of your upper arm by
            your doctor. It lasts for up to three years.
          </li>
        </Typography>

        <Divider style={{ marginTop: "0.5rem" }} />

        <Typography
          variant="h4"
          marginTop="2rem"
          marginLeft="3rem"
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Cardiovascular and central nervous systems
        </Typography>
        <Typography
          variant="body1"
          marginLeft="3rem"
          marginRight="1rem"
          marginTop="1rem"
          fontSize="1rem"
          fontWeight="500"
          color="#363239c9"
          fontFamily=" Poppins, sans-serif"
        >
          According to the Mayo Clinic, a healthy woman who doesn’t smoke is unlikely to
          experience serious side effects from oral contraceptives. However, for some
          women, birth control pills and patches can increase their blood pressure. Those
          extra hormones can also put you at risk for blood clots. These risks are even
          higher if you:
          <li>smoke or are over age 35</li>
          <li>have high blood pressure</li>
          <li>have a pre-existing heart disease</li>
          <li>have diabetes</li>
        </Typography>

        <Divider style={{ marginTop: "1rem" }} />
        <Typography
          variant="h3"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          FAQs
        </Typography>
        <div>
          <Grid style={{ marginTop: "1rem" }}></Grid>
          {faqData.map((faqItem) => (
            <Accordion
              style={{ marginLeft: "3rem", marginRight: "2rem" }}
              key={faqItem.id}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" style={questionStyle}>
                  {faqItem.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={answerStyle}>{faqItem.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        <div style={{ marginTop: "1rem" }}></div>
      </div>
    </Box>
  );
};

export default FemaleArticle;
