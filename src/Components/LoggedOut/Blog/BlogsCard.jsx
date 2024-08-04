import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Grid,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRhinoValue } from "react-rhino";
import ReadMoreReact from "read-more-react";

const BACKEND = import.meta.env.VITE_BACKEND_URL;

const SBox = styled(Box)`
  .read-more-button {
    color: #3f51b5;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }
`;

const CardHeader1 = styled(Box)`
  font-family: "Poppins,sans-serif";
  font-weight: 600;
`;

const Blog = (prop) => {
  const { author,body,id,title } = prop.param;
  const userName = author;
  const image = prop.param.image_id;
  const isUser = prop.param.email === useRhinoValue("email");

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/blog/update/${id}`);
  };
  const deleteRequest = async () => {
    const res = await axios
      .delete(`${BACKEND}/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blog"));
  };

  const [isExpanded, setisExpanded] = useState(false);
  const handleExpand = () => {
    setisExpanded(!isExpanded);
  };

  const truncatedContent = (
    <SBox>
      <ReadMoreReact
        text={body}
        min={126}
        ideal={126}
        max={130}
        readMoreText="Read More"
      />
    </SBox>
  );

  const expandedContent = (
    <Box>
      {body}
      <Typography
        color="primary"
        sx={{ "&:hover": { cursor: "pointer" } }}
        onClick={handleExpand}
      >
        <b>Show Less</b>
      </Typography>
    </Box>
  );

  return (
    <Box>
      {" "}
      <Card
        sx={{
          width: "70%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <ModeEditOutlineIcon color="warning" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color="error" />
            </IconButton>
          </Box>
        )}
        <CardHeader1>
          <CardHeader
            avatar={
              <Avatar
                //     className={classes.font}
                sx={{ bgcolor: "red" }}
                aria-label="recipe"
              >
                {userName ? userName.charAt(0) : ""}
              </Avatar>
            }
            title={title}
          />
        </CardHeader1>
        <CardMedia component="img" height="180" image={image} alt="blog image" />

        <CardContent>
          <hr />
          <br />
          <Grid style={{ width: "100%", wordWrap: "break-word" }}>
            <Box
              //   className={classes.font}
              variant="body2"
              color="text.secondary"
            >
              {isExpanded ? expandedContent : truncatedContent}
            </Box>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Blog;
