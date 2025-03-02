import { Box, Typography } from "@mui/material";
import AvatarList, { AvatarListData } from "./AvatarList";

const data: AvatarListData = [
  {
    id: Math.random(),
    heading: "Anish Shinde",
    imageUrl:
      "https://thumbs.dreamstime.com/b/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon-businessman-avatar-illustration-simple-cartoon-user-276189131.jpg",
  },
  {
    id: Math.random(),
    heading: "Raj Jadhav",
    imageUrl:
      "https://thumbs.dreamstime.com/b/businessman-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-business-leader-vector-illustration-businessman-276188988.jpg",
  },
  {
    id: Math.random(),
    heading: "Tejas Nikam",
    imageUrl:
      "https://img.freepik.com/premium-vector/drawing-man-with-glasses-tie-that-says-he-is-wearing-glasses_1013341-83536.jpg",
  },
];
function Contacts() {
  return (
    <Box>
      <Typography variant="subtitle2">Notifications</Typography>
      <AvatarList data={data} />
    </Box>
  );
}

export default Contacts;
