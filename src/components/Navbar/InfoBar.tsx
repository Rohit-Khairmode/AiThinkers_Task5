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
import ToolTipIconButton from "../material-ui-wrapper/ToolTipIconButton";
import SubTitle1 from "../material-ui-wrapper/Typography/SubTitle1";
function InfoBar() {
  const { leftSidebar, toggleLeftSideBar } = useSideBarContext();
  return (
    <Stack direction={"row"} sx={{ padding: "20px" }} spacing={1}>
      <ToolTipIconButton
        title="toggleSideBar"
        onClick={toggleLeftSideBar}
        iconStyle={{ display: "flex", alignItems: "end" }}
      >
        {leftSidebar ? <ViewSidebarOutlinedIcon /> : <ViewSidebarIcon />}
      </ToolTipIconButton>

      <ToolTipIconButton
        title="Add To Favourite"
        iconStyle={{ display: "flex", alignItems: "end" }}
      >
        <StarBorderIcon />
      </ToolTipIconButton>

      <Breadcrumbs
        aria-label="breadcrumbs"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <SubTitle1 sx={{ opacity: "50%" }}>Dashboard</SubTitle1>
        <SubTitle1>Default</SubTitle1>
      </Breadcrumbs>
    </Stack>
  );
}

export default InfoBar;
