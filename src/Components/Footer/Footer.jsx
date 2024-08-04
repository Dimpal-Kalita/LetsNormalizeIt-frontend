import React from "react";
import styled from "styled-components";
import { Typography, Box, Grid, Avatar, Divider, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Instagram } from "@mui/icons-material";

const FooterContainer = styled(Box)`
  padding: 16px;
  text-align: center;
`;

const NamesContainer = styled(Grid)`
  margin-bottom: 16px;
`;

const Name = styled(Box)`
  margin-right: 16px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <>
      <Divider />
      <FooterContainer>
        <NamesContainer container justifyContent="center" marginTop="1rem">
          <Grid item>
            <Name>
              {/* <Typography>Trilasha Mazumder</Typography> */}
              <Grid container justifyContent="center" spacing={1}>
                <Grid item>
                  <a
                    href="https://github.com/Dimpal-Kalita/LetsNormalizeIt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Avatar>
                      <GitHubIcon />
                    </Avatar>
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="https://www.linkedin.com/in/trilasha-mazumder"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Avatar>
                      <Instagram />
                    </Avatar>
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="https://linkedin.com/in/trilasha-mazumder-51b234224"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Avatar>
                      <LinkedInIcon />
                    </Avatar>
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="https://linkedin.com/in/dimpal-kalita-819121226"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Avatar>
                      <LinkedInIcon />
                    </Avatar>
                  </a>
                </Grid>
              </Grid>
            </Name>
          </Grid>
        </NamesContainer>
        <Typography marginTop="1rem" fontFamily="Poppins, sans-serif">
          For more info: &nbsp;
          <Link
            href="https://www.cdc.gov/sexualhealth/Default.html"
            target="_blank"
            color="inherit"
            rel="noopener noreferrer"
          >
            Click here
          </Link>
        </Typography>
        <Typography variant="body2" component="p" fontFamily="Poppins, sans-serif">
          @2023 LetsNormalizeIt. All rights reserved.
        </Typography>
      </FooterContainer>
    </>
  );
};

export default Footer;
