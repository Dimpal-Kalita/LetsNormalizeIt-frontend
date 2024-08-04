import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  styled,
  Container,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

import imageData from "../../../db/imageData.json";
const BACKEND = import.meta.env.VITE_BACKEND_URL;

const Image = styled(Box)`
  width: 100%;
  background: url("https://res.cloudinary.com/dwzws9wi7/image/upload/v1689160530/LetsNormalizeIt_MainBlogBanners/fro1nznj4s7eyxwabbgm.jpg")
    center/120% repeat-x #000;
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

const StyledContainer = styled(Container)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 20px;
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 20px;
  }
`;

const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImageid] = useState("");
  const { id } = useParams();
  const [imagestate, setImageState] = useState(imageData);
  const [fill, setFill] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    Loaduserdetails();
  }, []);

  const Loaduserdetails = async () => {
    const res = await axios.post(`${BACKEND}/blog/blog/${id}`);
    
    const data = await res.data;
    setTitle(data.title);
    setBody(data.body);
    setImageid(data.image_id);
    setAuthor(data.author);
    const newImageState = imagestate.map((item) => {
      if (item.img === data.image_id) {
        return {
          ...item,
          checked: true,
        };
      }
      if (item.img !== data.image_id) {
        return {
          ...item,
          checked: false,
        };
      }
      return item;
    });
    setImageState(newImageState);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setBody(event.target.value);
  };

  const ToggleValues = (imgid) => {
    const newImageState = imagestate.map((item) => {
      if (item.id === imgid && item.checked === false) {
        return {
          ...item,
          checked: true,
        };
      }
      if (item.id !== imgid) {
        return {
          ...item,
          checked: false,
        };
      }
      return item;
    });
    const newImageLink = newImageState.filter((item) => item.checked === true);
    newImageLink.map((item) => setImageid(item.img));
    setImageState(newImageState);
  };

  const handleUpload = () => {
    if (title === "" || body === "") {
      setFill(true);
      return;
    }
    const blogData = {
      title,
      body,
      author,
      image_id: image,
    };
    axios
      .patch(`${BACKEND}/blog/update/${id}`, blogData)
      .catch((e) => setError(e.message));
    navigate("/myblog");
  };

  return (
    <div>
      <Image>
        <Heading>Update your BLOG</Heading>
      </Image>
      <StyledContainer>
        <StyledTextField
          label="Title"
          value={title}
          onChange={handleTitleChange}
          fullWidth
        />
        <StyledTextField
          label="Description"
          value={body}
          onChange={handleDescriptionChange}
          fullWidth
          multiline
          rows={4}
        />

        <Typography variant="h6">Select a banner</Typography>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "2rem",
          }}
        >
          {imagestate.map((item) => (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox checked={item.checked} onClick={() => ToggleValues(item.id)} />
              }
              label={
                <img
                  src={item.img}
                  alt="img"
                  style={{ width: "100%", height: "10rem" }}
                />
              }
            />
          ))}
        </Container>

        {fill && <Typography color="red">* Please Fill all the fields</Typography>}
        {error && <Typography color="red">* {error}</Typography>}
        <StyledButton variant="contained" color="primary" onClick={handleUpload}>
          Update
        </StyledButton>
      </StyledContainer>
      <Box marginTop="2rem"></Box>
    </div>
  );
};

export default UpdateBlog;
