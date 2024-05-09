"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
// import { cardsData } from "../common/mock/mock-data";
import { useState } from "react";
import { pink } from "@mui/material/colors";
import { cardsData } from "../common/mock/mock-data";

const BlogsPage = () => {
  const router = useRouter();
const handleAllFilter = () => {
    router.push("/blogs");
  };

  const handlePopularFilter = () => {
    router.push("/blogs");
  };

  const handleLatestFilter = () => {
    router.push("/blogs");
  };

  const cardsPerPage = 15;
  const totalCards = cardsData.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const getPageCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cardsData.slice(startIndex, endIndex);
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
        alignItems: "stretch",
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
          // backgroundColor: "#000", // Set background color to black
          // padding: "20px", // Add padding for better spacing
          // borderRadius: "8px", // Add border radius for rounded corners
        }}
      >
        <Typography
          variant="h5"
          mr="35px"
          sx={{ color: "#333", 
          fontWeight: "bold",
          fontSize:40,
          fontFamily: "Dancing Script",
        }}
        >
          Explore Blogs
        </Typography>
        <Stack direction="row" spacing={1.5}>
          <Chip
            label="All"
            onClick={handleAllFilter}
            sx={{ borderRadius: "4px",
            backgroundColor: "#000", 
            fontSize:18,
            fontFamily:"EB Garamond",// Set background color to black
              color: "#fff", // Set text color to white 
            }}
          />
          <Chip
            label="Popular"
            variant="outlined"
            onClick={handlePopularFilter}
            sx={{ borderRadius: "4px" ,
            fontFamily:"EB Garamond",
            backgroundColor: "#000",
            fontSize:18, // Set background color to black
              color: "#fff", // Set text color to white
            }}
          />
          <Chip
            label="Latest"
            variant="outlined"
            onClick={handleLatestFilter}
            sx={{ borderRadius: "4px" ,
            fontFamily:"EB Garamond",
            fontSize:18,
            backgroundColor: "#000", // Set background color to black
              color: "#fff", // Set text color to white
            }}
          />
        </Stack>
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
        {getPageCards().map((card, index) => (
          <Card
          key = {index}
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: "6%",
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "transform 0.5s ease-in-out",
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
                <Typography gutterBottom variant="body1" 
                component="div" sx = {{fontFamily: "Dancing Script"}}>
                  {card.title}
                </Typography>
                <Typography fontSize={12} sx = {{fontFamily: "Dancing Script"}}>{card.author}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
          marginLeft: "25px",
          marginRight: "25px",
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'black',
              '&.Mui-selected': {
                backgroundColor: '#2196f3',
              },},}}
        />
      </Box>
    </Container>
  );
};
export default BlogsPage;
