import React from "react";

import {
  Avatar,
  Box,
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
  IconButton,
  Chip,
  Button,
} from "@mui/material";
import { blue, green } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Face6Icon from "@mui/icons-material/Face6";

const AccountPage = () => {
  const userBlogs = [
    { id: 1, title: "Top Places in Kathmandu" },
    {
      id: 2,
      title: "Explore the world of dailtdotdev for amazing daily tech news.",
    },
    {
      id: 3,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
    {
      id: 4,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
    {
      id: 5,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
    {
      id: 6,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
    {
      id: 7,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
    {
      id: 8,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
    {
      id: 9,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
    {
      id: 10,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
  ];

  return (
    <>
      <Box
        marginBottom={"-80px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        height={"700px"}
        width={"100%"}
      >
        {/* Profile Information */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            // width: "500px",
            height: "100%",
            padding: "20px",
            bgcolor: "#1C1678",
            color: "white",
          }}
        >
          <Avatar
            sx={{ bgcolor: "#BAB9D6", width: 80, height: 80, margin: 2, color: "black"}}
            alt="Aditya Shrestha"
            src="/static/images/avatar/2.jpg"
          ></Avatar>
          <Chip icon={<Face6Icon />} label="Bislerium Cafe Member"
          // color="success"
          sx={{
            height: "45px", // Adjust the height as needed
            width: "200px", // Adjust the width as needed
            fontFamily: "Dancing Script", 
            fontSize: 15,
            bgcolor: "#BAB9D6",
            color: "black",
            // Change the font family as needed
          }}
          />
          
          <Box sx={{ marginBottom: 2 ,
            fontFamily : "Dancing Script"}}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 2, margin: 2 }}
            >
            <PersonIcon sx={{ color: "white" }} />
              <Typography variant="body2" sx={{ fontFamily: "Dancing Script", fontSize: 16}}>Aashma Rai</Typography>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 2, margin: 2 }}
            >
             <BadgeIcon sx={{ color: "#FFFFFF" }} />
              <Typography variant="body2" sx={{ fontFamily: "Dancing Script", fontSize: 16}}>Aashma1819</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                margin: 2,
                maxWidth: "200px",
              }}
            >
          <EmailIcon sx={{ color: "white" }} />
              <Typography
                variant="body2"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  fontFamily: "Dancing Script",
                  fontSize: 16,
                }}
              >
                johndoe@example.com
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              sx={{
                color: "white",
                borderColor: "white",
                width: "200px",
                "&:hover": {
                  color: "gray",
                  borderColor: "gray",
                  // fontFamily: "Dancing Script",
                },
                fontFamily: "Dancing Script"
              }}
            >
              Edit Profile
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", height: "100%", overflow: "hidden" }}>
          {/* My Blogs Section */}
          <Box
            sx={{
              flex: "1 1 auto",
              paddingRight: "100px",
              marginBottom: "30px",
              width: "100vw",
              paddingLeft: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                paddingLeft: "25px",
                marginTop: 5,
                textAlign: "center",
              }}
            >
              {/* <BorderAllIcon /> */}
              <Typography variant="h6" sx={{ fontFamily: "Dancing Script", fontSize: 30}}>My Blogs</Typography>
            </Box>
            <Divider sx={{ width: "100%", marginTop: 1}} />
            <Container
              maxWidth="xl"
              sx={{
                paddingY: "10px",
                height: "85%",
                width: "100%",
                overflowY: "scroll",
                marginBottom: "0px",
              }}
            >
              {userBlogs.map((blog) => (
//                 <Card
//                   key={blog.id}
//                   sx={{ width: "100%", marginBottom: 2 }}
//                   elevation={0}
//                 >
                  
//                   <CardContent
//   sx={{
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   }}
// >
//   <Typography
//     variant="body1"
//     sx={{
//       maxWidth: "calc(50% - 16px)",
//       overflow: "hidden",
//       textOverflow: "ellipsis",
//       whiteSpace: "nowrap",
//       fontSize: 20,
//       fontFamily: "Dancing Script"
//     }}
//   >
//     {blog.title}
//   </Typography>
//   <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//     <Box>
//       <IconButton aria-label="edit">
//         <EditIcon sx={{ color: "black" }} />
//       </IconButton>
//     </Box>
//     <Box>
//       <IconButton aria-label="delete">
//         <DeleteIcon sx={{ color: "#d90429" }} />
//       </IconButton>
//     </Box>
//   </Box>
// </CardContent>

//                 </Card>

<Card
  key={blog.id}
  sx={{ width: "100%", marginBottom: 2, bgcolor: blue}}
  elevation={0}
>
  <CardContent
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Typography
      variant="body1"
      sx={{
        maxWidth: "calc(40% - 12px)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontSize: 20,
        // color: pink,
        fontFamily: "Dancing Script"
      }}
    >
      {blog.title}
    </Typography>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box sx={{ bgcolor: "green", padding: 1, borderRadius: 5 }}>
        <IconButton aria-label="edit">
          <EditIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Box sx={{ bgcolor: "red", padding: 1, borderRadius: 5 }}>
        <IconButton aria-label="delete">
          <DeleteIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  </CardContent>
</Card>

              ))}
            </Container>
            <Divider sx={{ width: "100%" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AccountPage;
