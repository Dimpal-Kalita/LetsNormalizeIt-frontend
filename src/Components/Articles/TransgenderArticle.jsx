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
import { ArrowBackIos, ArrowForwardIos, InfoOutlined } from "@mui/icons-material";
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
  questionStyle: {
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    fontSize: "18px",
  },
  answerStyle: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
  },
  icongrid: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "0.1rem",
  },
}));

const TransgenderArticle = () => {
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
      question: "What are some categories or types of transgender people?",
      answer:
        "Many identities fall under the transgender umbrella. The term transsexual refers to people whose gender identity is different from their assigned sex. Often, transsexual people alter or wish to alter their bodies through hormones, surgery, and other means to make their bodies as congruent as possible with their gender identities. This process of transition through medical intervention is often referred to as sex or gender reassignment, but more recently is also referred to as gender affirmation.",
    },
    {
      id: 2,
      question:
        "What should parents do if their 3 child appears to be transgender or gender nonconforming?",
      answer:
        "Parents may be concerned about a child who appears to be gender-nonconforming for a variety of reasons. Some children express a great deal of distress about their assigned sex at birth or the gender roles they are expected to follow. Some children experience difficult social interactions with peers and adults because of their gender expression. Parents may become concerned when what they believed to be a “phase” does not pass.",
    },
    {
      id: 3,
      question: "How do transsexuals make a gender transition?",
      answer:
        "Transitioning from one gender to another is a complex process and may involve transition to a gender that is neither traditionally male nor female. People who transition often start by expressing their preferred gender in situations where they feel safe. They typically work up to living full time as members of their preferred gender by making many changes a little at a time. While there is no “right” way to transition genders, there are some common social changes transgender people experience",
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
          <Typography variant="h6" color="textSecondary">
            <InfoOutlined style={{ marginRight: "0.5rem" }} />
            Point 3
          </Typography>
          <Grid className={classes.icongrid}>
            <PriorityHighIcon className={classes.icon} />
            <Typography
              variant="h6"
              color="textSecondary"
              fontFamily="Poppins, sans-serif"
            >
              Talk therapy can help you manage your addiction. You could also cut down by
              replacing masturbation with other activities.
            </Typography>
          </Grid>
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
        {/* Transgender section starts */}
        <Typography
          variant="h3"
          style={{ marginTop: "2rem", marginLeft: "3rem", marginRight: "2rem" }}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Transgender
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
          Some people believe that the sex assigned to them at birth does not correspond
          to their gender identity or the gender they believe they are on the inside.
          These folks are commonly referred to as <strong>transgender</strong> .
          Transgender is a word that includes the various ways in which people&apos;s
          gender identities differ from the sex assigned to them at birth. There are
          numerous labels used by transgender persons to describe themselves. For example,
          transgender is sometimes abbreviated as{" "}
          <strong>trans, trans*, or trans male/trans female</strong> . It&apos;s always
          best to use the language and labels that the person prefers. Gender identity is
          expressed in a variety of ways by transgender people. Some people dress, act,
          and behave in ways that correspond to the gender they identify with. Some people
          use hormones and may have surgery to alter their bodies to match their gender
          identity. Some transgender people reject the standard gender binary of
          &quot;male&quot; and &quot;female&quot;, and instead identify as{" "}
          <strong>transgender, genderqueer, genderfluid,</strong> or something else
          entirely.
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
          What&apos;s gender dysphoria?
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
          <img
            src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197242/LetsNormalizeIt_Articles/ll8yknlxdy7hgrfxsd5q.jpg"
            align="right"
            alt="gender dysphoria"
          ></img>
          Gender dysphoria is a term used by <strong>psychologists</strong> and{" "}
          <strong>doctors</strong> to describe the discomfort, sadness, and worry that
          transgender people may experience as a result of{" "}
          <strong>the misfit of their bodies and gender identities</strong>. A person with
          gender dysphoria may be formally diagnosed in order to receive medical treatment
          to aid in their transition. This was once referred to as{" "}
          <strong>&quot;gender identity disorder&quot;</strong> by psychologists.The word
          was altered to reflect the fact that a mismatch between a person&apos;s body and
          gender identity isn&apos;t a mental disease in and of itself (though it can
          cause emotional discomfort).
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
          How is a transgender identity different from sexual orientation?
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
          People often confuse gender identity with <strong>sexual orientation</strong>.
          But being transgender isn&apos;t the same thing as being lesbian, gay, or
          bisexual. Gender identity, whether transgender or cisgender, is about who you
          ARE inside as male, female, both, or none of these. Being lesbian, gay,
          bisexual, or straight describes who you&apos;re attracted to and who you feel
          yourself drawn to <strong>romantically, emotionally, and sexually</strong>. A
          transgender person can be gay, lesbian, straight, or bisexual, just like someone
          who&apos;s cisgender. A simple way to think about it is:{" "}
          <strong>
            {" "}
            Sexual orientation is about who you want to be with. Gender identity is about
            who you are
          </strong>
          .
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
          Transgender Sexual and Reproductive Health: Unmet Needs and Barriers to Care
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
          Outright discrimination and refusal to treat transgender patients, as well as a
          lack of relevant clinical and cultural knowledge among physicians, are all
          barriers to excellent health care for transgender persons. These concerns are
          heightened by the intimate nature of sexual and reproductive health care, which
          includes screening and treatment for sexually transmitted diseases, breast,
          cervical, and prostate cancers, as well as contraception administration.
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
          Because of their gender identities or sexual choices, or because elements of
          their body may not adhere to gender standards, transgender patients seeking
          sexual and reproductive health care may fear being treated in a disrespectful or
          judgemental manner. Those worries are all too frequently justified. Many
          healthcare practitioners believe that transgender patients do not require
          treatments like pelvic examinations or contraception, or that treating
          transgender patients is too difficult for them to handle. These interactions
          contribute to considerable inequities in transgender people&apos;s sexual and
          reproductive health.
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
          Recommendations To Improve Transgender Sexual And Reproductive Health Care
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
          <strong>Observe all physician recommendations.</strong> Clinical guidelines and
          recommendations for transgender persons from the American Congress of
          Obstetricians and Gynecologists (ACOG) and the World Professional Association
          for Transgender Health should be familiarised by sexual and reproductive health
          practitioners
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
          <strong>Adopt nondiscrimination and respect policies. </strong> Providers should
          also create a written nondiscrimination policy that acknowledges and respects
          each patient&apos;s gender identification. Some clinicians have taken the step
          of creating a clinic guide for transgender-inclusive care.
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
          <strong>
            Staff members should be trained in cultural competency and nondiscrimination.
          </strong>
          Clinicians and workers should be educated on transgender-friendly treatment,
          nondiscrimination, and inclusiveness. Staff training materials on transgender
          and LGBT competency have been developed by the Fenway Institute and the Joint
          Commission.
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
          <strong>
            Transgender inclusivity should be incorporated into grant standards.
          </strong>{" "}
          The Health Department and Human Services should amend Title X family planning
          grant program standards to ban discrimination based on gender identity and
          sexual orientation, as well as to accommodate the cultural and clinical
          requirements of transgender patients.
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
          <strong>Discrimination should be reported.</strong> Gender-based discrimination
          by health-care providers that accept government funds is illegal under federal
          law. Patients and their advocates should file discrimination complaints with the
          proper authorities to claim their right to get treatment free of discrimination.
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
          <strong>
            Remove public policies that oblige trans persons to undergo sterilization
            operations.{" "}
          </strong>{" "}
          Transgender people&apos;s reproductive rights are violated when policies require
          them to undergo sex reassignment surgery before altering their gender marker on
          government records. This often amounts to forced sterilization. Gender marker
          modifications should be allowed without needing proof of surgery or other
          intrusive medical treatments, according to federal, state, and municipal
          legislation.
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

export default TransgenderArticle;
