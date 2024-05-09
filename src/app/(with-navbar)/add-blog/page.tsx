"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { blue } from "@mui/material/colors";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const StyledTypography = styled(Typography)({
  borderBottom: "4px solid black",
  paddingBottom: "4px", // Adjust as needed for spacing
});

const AddBlogPage = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      // Check if file size is less than or equal to 3 MB
      if (file.size <= 3 * 1024 * 1024) {
        setImage(URL.createObjectURL(file));
      } else {
        alert("File size exceeds 3 MB limit.");
      }
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: "60px",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <StyledTypography variant="h5" sx={{ color: "#333", fontWeight: "bold" ,fontFamily: "Dancing Script"}}>
          Create Your Own Blog
        </StyledTypography>
        {/* <Divider sx={{ width: "88%", marginTop: 2 }} /> */}
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        height={"360px"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginLeft={"25px"}
          paddingLeft={"63px"}
          paddingRight={"25px"}
          width={"50%"}
          height={"100%"}
        >
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Button
              disableRipple
              component="label"
              role={undefined}
              variant="outlined"
              sx={{
                padding: 0,
                width: "100%",
                height: "100%",
                gap: 2,
                color: "black",
                borderColor: "black",
                "&:hover": {
                  backgroundColor: "lightgrey",
                  borderColor: "black",
                },
                "& > :first-child": {
                  fontSize: "1rem", // Adjust font size as needed
                  fontFamily: "Dancing Script", // Add your font family
                },
              }}
            >
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <>
                  <CloudUploadIcon />
                  <Typography sx= {{fontFamily: "Dancing"}}>Upload a Cover Picture</Typography>
                </>
              )}
              <VisuallyHiddenInput type="file" onChange={handleImageChange} />
            </Button>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 3,
            flexWrap: "wrap",
            marginRight: "25px",
            paddingLeft: "25px",
            paddingRight: "63px",
            width: "50%",
            height: "100%",
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="Title"
            placeholder="Write the title of your blog"
            sx={{
              width: "100%",
              maxWidth: "100%",
              backgroundColor: "#fff",
              fontFamily: "Dancing Script",
              "& .MuiInputLabel-root": {
                color: "grey", // Change the label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                fontSize: "20px", // Change the font size when focused
                color: "black",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black", // Change the border color
                },
                "&:hover fieldset": {
                  borderColor: "#black", // Change the border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "Black", // Change the border color when focused
                  fontSize: "20px",
                },
              },
            }}
          />
          <TextField
            required={true}
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={10}
            placeholder="Add content description of your blog"
            variant="outlined"
            sx={{
              width: "100%",
              maxWidth: "100%",
              backgroundColor: "#fff",
              "& .MuiInputLabel-root": {
                color: "grey", // Change the label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                fontSize: "20px", // Change the font size when focused
                color: "black",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black", // Change the border color
                },
                "&:hover fieldset": {
                  borderColor: "#black", // Change the border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "Black", // Change the border color when focused
                  fontSize: "20px",
                },
              },
            }}
          />
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Divider sx={{ width: "88%", marginBottom: 3 }} />
        <Button
          disableElevation
          variant="contained"
          sx={{
            width: "10%",
            height: "50px",
            bgcolor: "black",
            borderColor: "black",
            fontFamily: "Dancing Script",
            "&:hover": { backgroundColor: "gray" },
          }}
        >
          Create Blog
        </Button>
      </Box>
    </Container>
  );
};

export default AddBlogPage;
