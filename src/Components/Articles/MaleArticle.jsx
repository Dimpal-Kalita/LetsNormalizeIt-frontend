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

const MaleArticle = () => {
  const headingStyle1 = {
    marginTop: "6rem",
    marginLeft: "3rem",
  };
  const headingStyle2 = {
    marginTop: "2rem",
    marginLeft: "3rem",
  };
  const classes = useStyles();

  // FAQ section
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
      question: "Does a man go through menopause?",
      answer:
        "Yes, a man goes through menopause, but to a different extent than a woman. Menopause is a term used to describe the end of a woman's fertility. It literally means the end of menstruation. Female menopause is characterized by changes in hormone production. The male testes, unlike the woman's ovaries, do not lose the ability to make hormones. A healthy male may be able to make sperm well into their 80s or longer.",
    },
    {
      id: 2,
      question: "What should I do if I have pain in the testes?",
      answer:
        "Pain, lumps or swelling in the testes don’t always mean cancer, as guys might mistakenly assume. Regardless of the cause, however, you should have it checked out immediately. “If a guy experiences sudden pain or swelling after participating in a weekend warrior or sports activity, he could have a testicular torsion, which is a medical emergency and should be seen at the ER immediately,” Dr. Campbell said, adding that doctors usually do an ultrasound to diagnose the issue. “Or it could be epididymitis, which is inflammation that can be treated with antibiotics and antiinflammatory medications.”",
    },
    {
      id: 3,
      question: "Should I be worried if I see blood in the toilet bowl?",
      answer:
        "If you’ve got rectal bleeding, it’s time to schedule an appointment. “Often, it’s just a hemorrhoid, and frequently a patient will be able to tell by feeling a lump, experiencing some discomfort during bowel movements and rectal itching, but you never want to just assume that it is due to a hemorrhoid,” said Dr. Campbell. “The big concern is colorectal cancer, which is the second leading cause of cancer death in men, so it’s important not to ignore that symptom.” The same goes for bloody urine.",
    },
    {
      id: 4,
      question: "How to keep a penis clean?",
      answer:
        "1. Gently wash the penis with warm water each day when you're having a shower or bath. 2. If you have a foreskin, pull it back gently and wash underneath.",
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
          autoFocus
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

        {/* Male section starts */}
        <Typography
          variant="h2"
          style={{ marginTop: "2rem", marginLeft: "3rem", marginRight: "2rem" }}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Male
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
          There&apos;s plenty of debate out there when it comes to the best regimen for
          keeping your sexy parts clean and healthy; but there are some basics that apply
          to everyone. Here are 10 rules to remember when it comes to sexual hygiene for
          men.
        </Typography>

        <Typography
          variant="h4"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Wash, Dry, and Smell Good
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
          Testicles are prone to smelling bad, sweating, and getting irritated. The skin
          around a man’s genital area is no different than the rest of his body; it can be
          washed at least once a day. If you sweat a lot, whether it’s from working out,
          hot weather, or you’re just the type, make sure to stay clean down there. If you
          need a bit of help on this front, our friends at Ballsy have perfected the
          process. Check out their ballwash and other products.
        </Typography>

        <Typography
          variant="h4"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Never Anus Before Vagina
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
          Bacteria in the rectum can easily be transferred to the vagina during
          intercourse. While anal sex can stay in your sexual reportoire, remember that if
          anything has been inside your rectum (fingers, mouth, toy, penis), wash it with
          soap and water before it touches the vagina. Anal and vaginal bacteria are
          different, and introducing one to the other can lead to infection.
        </Typography>

        <Typography
          variant="h4"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Wear Condoms
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
          Although not as scary as it sounds, sex usually involves some kind of skin
          tearing and/or bleeding. With that in mind, a condom is always strongly advised
          for vaginal and anal sex. If you wait to see bleeding as a red flag, be aware:
          many vaginal and anal tears can be microscopic, but still contribute to
          transmission of STDs.
        </Typography>

        <Typography
          variant="h4"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Erectile dysfunction
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
          Erectile dysfunction (impotence) is the inability to get and keep an erection
          firm enough for sex.Having erection trouble from time to time isn&apos;t
          necessarily a cause for concern. If erectile dysfunction is an ongoing issue,
          however, it can cause stress, affect your self-confidence and contribute to
          relationship problems. Problems getting or keeping an erection can also be a
          sign of an underlying health condition that needs treatment and a risk factor
          for heart disease.
        </Typography>
        <div className={classes.root} style={{ marginTop: "1rem" }}>
          <Grid style={{ display: "flex", flexDirection: "row" }} container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer3}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197241/LetsNormalizeIt_Articles/mxhkqtce2yfbkgc1nzh2.webp"
                  alt="Image1"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer3}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197242/LetsNormalizeIt_Articles/utepoxokmwu0hyb6pye2.webp"
                  alt="Image2"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer3}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197242/LetsNormalizeIt_Articles/qap2m2t9sztyq9kzdzbg.jpg"
                  alt="Image3"
                  className={classes.image}
                />
              </div>
            </Grid>
          </Grid>
        </div>

        <Typography
          variant="h4"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Penis Size
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
          According to one study published in the British Journal of Urology International
          (BJUI)Trusted Source, the average length of a flaccid penis is 3.61 inches,
          while the average length of an erect penis is 5.16 inches. The average girth is
          3.66 inches for a flaccid penis and 4.59 inches for an erect penis. Girth is the
          circumference of the penis at its widest section. Keep reading to learn more
          about penis size, how much size matters for sexual satisfaction, and what you
          should do if you’re worried that your penis is too small...
        </Typography>

        <Typography
          variant="h4"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Does size matter?
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
          Of particular concern for some men is whether their penis will be satisfying
          sexually for themselves and their partner. Some men may also be anxious about
          how they look naked. When it comes to sexual intercourse, bigger may not always
          be better. In a study in the journal PLOS OneTrusted Source, researchers
          interviewed 75 sexually active women about the size of penis they would prefer
          for a one-night stand and for a long-term relationship. The women were shown 33
          different-sized 3-D penis models made out of blue plastic so as not to suggest a
          particular race.
        </Typography>

        <Typography
          variant="h4"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Can I increase the size of my penis?
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
          The decision to try to increase the size of your penis should be made carefully
          with the consultation of a urologist. The Journal of Urology study recommended
          that only men with a flaccid penis length of less than 1.6 inches or an erect
          penis of less than 3 inches should be considered as candidates for
          penile-lengthening treatment.
        </Typography>
        <div className={classes.root} style={{ marginTop: "1rem" }}>
          <Grid style={{ display: "flex", flexDirection: "row" }} container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer3}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197241/LetsNormalizeIt_Articles/wlxf2jzvo2jvt1yc32rf.jpg"
                  alt="Image1"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer3}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197242/LetsNormalizeIt_Articles/dalklrswitlbxkaz8o1z.png"
                  alt="Image2"
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.imageContainer3}>
                <img
                  src="https://res.cloudinary.com/dwzws9wi7/image/upload/v1689197242/LetsNormalizeIt_Articles/oiulwflxkzlfghd1ihxf.webp"
                  alt="Image3"
                  className={classes.image}
                />
              </div>
            </Grid>
          </Grid>
        </div>

        <Divider style={{ marginTop: "0.5rem" }} />

        <Typography
          variant="h3"
          style={headingStyle2}
          fontWeight="600"
          color="#313033e8"
          fontFamily=" Poppins, sans-serif"
        >
          Reference
        </Typography>

        <Typography
          variant="body1"
          style={{ marginLeft: "3rem", marginTop: "0.5rem" }}
          fontWeight="400"
          color="#313033e8"
          sm={{ fontSize: "0.8rem" }}
          xs={{ fontSize: "0.1rem" }}
          md={{ fontSize: "0.9rem" }}
        >
          <a
            href="https://www.verywellhealth.com/external-penile-prostheses-for-erectile-dysfunction-treatment-4165459"
            target="blank"
          >
            https://www.verywellhealth.com/external-penile-prostheses-for-erectile-dysfunction-treatment-4165459
          </a>
        </Typography>
        <Typography
          variant="body1"
          style={{ marginLeft: "3rem", marginTop: "0.5rem" }}
          fontWeight="400"
          color="#313033e8"
        >
          <a
            href="https://education.eddiebygiddy.com/mens-health/sexual-hygiene-for-men-10-rules-to-live-by"
            target="blank"
          >
            https://education.eddiebygiddy.com/mens-health/sexual-hygiene-for-men-10-rules-to-live-by.
          </a>
        </Typography>
      </div>

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
          <Accordion style={{ marginLeft: "3rem", marginRight: "2rem" }} key={faqItem.id}>
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
    </Box>
  );
};

export default MaleArticle;
