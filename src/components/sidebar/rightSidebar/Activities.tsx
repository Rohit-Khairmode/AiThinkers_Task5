import { Box, Typography } from "@mui/material";
import AvatarList, { AvatarListData } from "./AvatarList";
const data: AvatarListData = [
  {
    id: Math.random(),
    heading: "Changed the style.",
    subHeading: "Just Now",
    imageUrl:
      "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg?w=1060",
  },
  {
    id: Math.random(),
    heading: "Released a new version.",
    subHeading: "Just Now",
    imageUrl:
      "https://thumbs.dreamstime.com/b/businessman-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-business-leader-vector-illustration-businessman-276189054.jpg",
  },
  {
    id: Math.random(),
    heading: "Modified A data in Page X.",
    subHeading: "Just Now",
    imageUrl:
      "https://c8.alamy.com/comp/2PWERD5/student-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-youth-avatar-vector-illustration-2PWERD5.jpg",
  },
];

function Activities() {
  return (
    <Box>
      <Typography variant="subtitle2">Activities</Typography>
      <AvatarList data={data} />
    </Box>
  );
}

export default Activities;
