"use client";
import { Divider, Stack } from "@mui/material";
import Dashboards from "./Dashboards";
import UserProfile from "./UserProfile";
import Pages from "./Pages";
import { useSideBarContext } from "@/context/SideBarContext";

function SideBar() {
  const { leftSidebar } = useSideBarContext();
  return (
    <Stack direction={"row"}>
      {leftSidebar && (
        <Stack sx={{ padding: "4px" }}>
          <UserProfile />
          <Dashboards />
          <Pages />
        </Stack>
      )}
      <Divider
        orientation="vertical"
        sx={{
          height: "100%",
        }}
      />
    </Stack>
  );
}

export default SideBar;
