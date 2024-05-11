"use client";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
// import { cardsData } from "../common/mock/mock-data";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Home = () => {
  const router = useRouter();

  const handleBlogsButtonClick = () => {
    router.push("/blogs");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "60px",
          height: "91vh",
          overflow: "hidden",
        }}
      >
        <img src="banner/home.jpg" alt="banner" />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Button
            onClick={handleBlogsButtonClick}
            variant="contained"
            sx={{
              backgroundColor: "#1C1678",
              color: "#fff",
              borderRadius: "25px",
              marginTop: "100px",
              textTransform: "none", // Preserve text case
              padding: "14px 28px", // Increase padding for better clickability
              fontSize: "18px", // Increase font size
              "&:hover": { backgroundColor: "#222" }
            }}
          >
            View Blogs
          </Button>
        </div>
      </div>
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            marginLeft: "25px",
            marginRight: "25px",
            paddingLeft: "63px",
          }}
        >
          <button
            onClick={handleBlogsButtonClick}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h4"
              mr="4px"
              sx={{ color: "#333", fontWeight: "bold", fontFamily: "Dancing Script"}}
            >
              Popular
            </Typography>
            {/* <ChevronRightIcon
              fontSize="large"
              sx={{ fontSize: 32, color: "black" }}
            /> */}
          </button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 3,
            flexWrap: "wrap",
            padding: "0px 60px",
            marginLeft: "25px",
            marginRight: "25px",
          }}
        >
          <Box
            sx={{
              width: "53%",
              height: "467px",
            }}
          >
            {/* {cardsData.slice(0, 1).map((card, index) => (
              <Card
              key = {index}
                sx={{
                  bgcolor: "#1a1a1a",
                  color: "white",
                  height: "467px",
                  maxWidth: "100%",
                  borderRadius: 1,
                  "&:hover": {
                    transform: "scale(1.01)",
                    bgcolor: "#f2f2f2",
                    color: "black",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
                elevation={0}
              >
                <CardActionArea disableRipple sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt="green iguana"
                    sx={{ maxHeight: "83%" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div"
                    sx={{ fontFamily: "Dancing Script" ,fontSize: 20}} 
                    >
                      {card.title}
                    </Typography>
                    <Typography fontSize={12}
                    sx={{ fontFamily: "Dancing Script", fontSize: 14 }}
                    >{card.author}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))} */}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "45%",
            }}
          >
            {/* {cardsData.slice(1, 4).map((card, index) => (
              <Card
              key = {index}
                sx={{
                  bgcolor: "#1a1a1a",
                  color: "white",
                  maxHeight: 140,
                  maxWidth: "100%",
                  borderRadius: 1,
                  "&:hover": {
                    transform: "scale(1.01)",
                    bgcolor: "#f2f2f2",
                    color: "black",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
                elevation={0}
              >
                <CardActionArea
                  disableRipple
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      objectFit: "cover",
                      maxWidth: "45%",
                    }}
                    height="150"
                    image={card.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography 
                    fontSize={20}
                    sx={{ fontFamily: "Dancing Script" }}
                    gutterBottom 
                    variant="body1" component="div">
                      
                      {card.title}
                    </Typography>
                    <Typography fontSize={12}
                    sx={{ fontFamily: "Dancing Script" }}
                    >{card.author}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))} */}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            marginTop: "60px",
            marginLeft: "25px",
            marginRight: "25px",
            paddingLeft: "63px",
          }}
        >
          <button
            onClick={handleBlogsButtonClick}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h5"
              mr="4px"
              sx={{ color: "#333", fontWeight: "bold" , fontFamily: "Dancing Script", fontSize: 32}}
            >
              Latest
            </Typography>
            {/* <ChevronRightIcon
              fontSize="large"
              sx={{ fontSize: 32, color: "black" }}
            /> */}
          </button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
            marginLeft: "25px",
            marginRight: "25px",
          }}
        >
          {/* {cardsData.slice(5, 10).map((card, index) => (
            <Card
              key = {index}
              sx={{
                bgcolor: "#1a1a1a",
                color: "white",
                maxHeight: 300,
                maxWidth: 240,
                borderRadius: 1,
                "&:hover": {
                  transform: "scale(1.02)",
                  bgcolor: "#f2f2f2",
                  color: "black",
                },
                transition: "all 0.2s ease-in-out",
              }}
              elevation={0}
            >
              <CardActionArea disableRipple>
                <CardMedia
                  component="img"
                  height="200"
                  image={card.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                  fontSize={17}
                  sx={{ fontFamily: "Dancing Script" }}
                   gutterBottom variant="body1" 
                   component="div">
                    {card.title}
                  </Typography>
                  <Typography fontSize={13}
                  sx={{ fontFamily: "Dancing Script" }}
                  >
                    {card.author}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))} */}
        </Box>
      </Container>
    </>
  );
};

export default Home;
