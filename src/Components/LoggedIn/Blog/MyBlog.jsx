import React, { useEffect, useState } from "react";

import axios from "axios";
import { Box, styled, Typography } from "@mui/material";
import { useRhinoValue } from "react-rhino";
import Blog from "./BlogsCard";
const BACKEND = import.meta.env.VITE_BACKEND_URL;

const Image = styled(Box)`
  width: 100%;
  background: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg)
    center/100% no-repeat #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1;
  font-family: "Poppins,sans-serif";
`;

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const Remail = useRhinoValue("email");

  const getEmail = async () => {
    try {
      const email = await Remail;
      return email;
    } catch (err) {
      return ""
    }
  }
  const sendRequest = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "Email": await getEmail()
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    const rest= await fetch(`${BACKEND}/blog/user`, requestOptions);
    const data= await rest.json();
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <Image>
        <Heading>All my Blogs</Heading>
      </Image>
      <Box>
        {blogs &&
          blogs
            .map((blog) => <Blog key={blog.id} param={blog} />)}
      </Box>
      <Box marginTop="2rem"></Box>
    </div>
  );
};

export default MyBlogs;
