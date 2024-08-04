import React, { useEffect, useState } from "react";

import axios from "axios";
import { Box, styled, Typography } from "@mui/material";
import Blog from "./BlogsCard";

const BACKEND = import.meta.env.VITE_BACKEND_URL;

const Image = styled(Box)`
  width: 100%;
  background: url("https://res.cloudinary.com/dwzws9wi7/image/upload/v1689160529/LetsNormalizeIt_MainBlogBanners/dhi5idcfozdvb7jumybs.jpg")
    center/100% repeat-x #000;
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

const SubHeading = styled(Typography)`
  font-size: 20px;
  font-family: "Poppins,sans-serif";
`;


const OutBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  // fetch the blogs in no-cors mode
  const sendRequest = async () => {
    const res = await axios.post(`${BACKEND}/blog/blogs`);
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <Image>
        <Heading>BLOG</Heading>
        <SubHeading>Lets Normalize It</SubHeading>
      </Image>
      <Box>{blogs && blogs.map((blog) => <Blog key={blog.id} param={blog} />)}</Box>
      <Box marginTop="2rem"></Box>
    </div>
  );
};

export default OutBlogs;
