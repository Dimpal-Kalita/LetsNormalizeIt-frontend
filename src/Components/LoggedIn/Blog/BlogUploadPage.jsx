import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  styled,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";

import { useRhinoValue } from "react-rhino";
import { useNavigate } from "react-router-dom";

import imageData from "../../../db/imageData.json";

const BACKEND = import.meta.env.VITE_BACKEND_URL;

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

const Image = styled(Box)`
  width: 100%;
  background: url(https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80)
    center/55% repeat-x #000;
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

const BlogUploadPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImageID] = useState(
    "https://res.cloudinary.com/dfriijrmr/image/upload/v1689102781/LetsNormaliseIt/top-view-bath-concept-accessories-with-copy-space_xgjsj0.jpg"
  );
  const id = useRhinoValue("JWTtoken");
  const email = useRhinoValue("email");
  const [imagestate, setImageState] = useState(imageData);

  const [fill, setFill] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
    newImageLink.map((item) => setImageID(item.img));
    setImageState(newImageState);
  };
  const handleUpload = () => {
    if (title === "" || body === "" || image === "") {
      setFill(true);
      return;
    }
    const blogData = {
      title,
      body,
      image_id: image,
      author: email,
    };

    axios.post(`${BACKEND}/blog/create`, blogData).catch((e) => setError(e.message));
    navigate("/myblog");
  };

  return (
    <div>
      <Image>
        <Heading>Create a new BLOG</Heading>
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

        <Typography variant="h6">Select a banner for your blog</Typography>
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
          Upload
        </StyledButton>
      </StyledContainer>
      <Grid marginTop="2rem"></Grid>
    </div>
  );
};

export default BlogUploadPage;
