"use client";
import { Box, Divider, Stack } from "@mui/material";
import Notifications from "./Notifications";
import Activities from "./Activities";
import Contacts from "./Contacts";
import { useSideBarContext } from "@/context/SideBarContext";
import VerticalDivider from "@/components/material-ui-wrapper/VerticalDivider";

function RightSideBar() {
  const { rightSidebar } = useSideBarContext();
  return (
    <Stack direction={"row"} padding={"4px"}>
      <VerticalDivider />
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
