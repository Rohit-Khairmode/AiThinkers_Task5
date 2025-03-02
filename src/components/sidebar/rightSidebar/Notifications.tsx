import BugReportIcon from "@mui/icons-material/BugReport";
import { Box, Typography } from "@mui/material";
import AvatarList, { AvatarListData } from "./AvatarList";
const data: AvatarListData = [
  {
    id: Math.random(),
    heading: "You fixed a bug",
    subHeading: "Just Now",
    icon: <BugReportIcon />,
  },
  {
    id: Math.random(),
    heading: "New user registered.",
    subHeading: "Just Now",
    icon: <BugReportIcon />,
  },
  {
    id: Math.random(),
    heading: "Andi Lane subscribed to you.",
    subHeading: "Just Now",
    icon: <BugReportIcon />,
  },
];
function Notifications() {
  return (
    <Box>
      <Typography variant="subtitle2">Notifications</Typography>
      <AvatarList data={data} />
    </Box>
  );
}

export default Notifications;
