import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Tab from "./Tab";
import { Box, Stack } from "@mui/material";
const data = [
  {
    title: "Views",
    count: "7,265",
    countChange: "+11.01%",
    icon: <TrendingUpIcon />,
    color: "#EDEEFC",
  },
  {
    title: "Visits",
    count: "3,671",
    countChange: "-0.03%",
    icon: <TrendingDownIcon />,
    color: "#E6F1FD",
  },
  {
    title: "New Users",
    count: "156 ",
    countChange: "+15.03%",
    icon: <TrendingUpIcon />,
    color: "#EDEEFC",
  },
  {
    title: "Active Users",
    count: "2,318",
    countChange: "+6.08%",
    icon: <TrendingUpIcon />,
    color: "#E6F1FD",
  },
];
function Tabs() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "8px",
        // justifyItems: "center",
      }}
    >
      {data.map((cur) => (
        <Tab data={cur} key={cur.countChange} />
      ))}
    </Box>
  );
}

export default Tabs;
