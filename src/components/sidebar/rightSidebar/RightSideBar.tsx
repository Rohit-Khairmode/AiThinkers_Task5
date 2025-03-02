"use client";
import { Box, Divider, Stack } from "@mui/material";
import Notifications from "./Notifications";
import Activities from "./Activities";
import Contacts from "./Contacts";
import { useSideBarContext } from "@/context/SideBarContext";

function RightSideBar() {
  const { rightSidebar } = useSideBarContext();
  return (
    <Stack direction={"row"} padding={"4px"}>
      <Divider
        orientation="vertical"
        sx={{
          height: "100%",
        }}
      />
      {rightSidebar && (
        <Stack sx={{ padding: "4px" }}>
          <Notifications />
          <Activities />
          <Contacts />
        </Stack>
      )}
    </Stack>
  );
}

export default RightSideBar;
