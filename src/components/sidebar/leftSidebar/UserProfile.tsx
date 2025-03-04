"use client";
import { Avatar, Box, List, ListItem, Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useAuth } from "@/context/AuthContext";
import { AuthContextType } from "@/utils/types";
import SubTitle1 from "@/components/material-ui-wrapper/Typography/SubTitle1";
import SubTitle2 from "@/components/material-ui-wrapper/Typography/SubTitle2";
function UserProfile() {
  const authContextRespone: AuthContextType | null = useAuth();
  if (!authContextRespone) throw new Error("Problem in context");
  const { user }: AuthContextType = authContextRespone;
  return (
    <Stack spacing={2} component="section" sx={{ p: 2 }}>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Avatar
          alt="Remy Sharp"
          src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
        />
        <SubTitle1>{user?.userName}</SubTitle1>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <SubTitle2 sx={{ opacity: "50%" }}>Favorites</SubTitle2>
        <SubTitle2 sx={{ opacity: "50%" }}>Recently</SubTitle2>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        sx={{ pl: "4px" }}
      >
        <CircleIcon sx={{ fontSize: "12px", opacity: "50%" }} />
        <SubTitle1>Overview</SubTitle1>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        sx={{ pl: "4px" }}
      >
        <CircleIcon sx={{ fontSize: "12px", opacity: "50%" }} />
        <SubTitle1>Projects</SubTitle1>
      </Stack>
    </Stack>
  );
}

export default UserProfile;
