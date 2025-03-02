"use client";
import { useSideBarContext } from "@/context/SideBarContext";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import {
  Box,
  Breadcrumbs,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
function InfoBar() {
  const { leftSidebar, toggleLeftSideBar } = useSideBarContext();
  return (
    <Stack direction={"row"} sx={{ padding: "20px" }} spacing={1}>
      <Tooltip title="toggleSideBar" arrow>
        <IconButton
          onClick={toggleLeftSideBar}
          sx={{ display: "flex", alignItems: "end" }}
        >
          {leftSidebar ? <ViewSidebarOutlinedIcon /> : <ViewSidebarIcon />}
        </IconButton>
      </Tooltip>
      <Tooltip title="Add To Favourite" arrow>
        <IconButton sx={{ display: "flex", alignItems: "end" }}>
          <StarBorderIcon />
        </IconButton>
      </Tooltip>

      <Breadcrumbs
        aria-label="breadcrumbs"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography variant="subtitle1" sx={{ opacity: "50%" }}>
          Dashboard
        </Typography>
        <Typography variant="subtitle1">Default</Typography>
      </Breadcrumbs>
    </Stack>
  );
}

export default InfoBar;
