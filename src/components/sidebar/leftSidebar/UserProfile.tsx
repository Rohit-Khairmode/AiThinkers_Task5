import { Avatar, Box, List, ListItem, Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
function UserProfile() {
  return (
    <Stack spacing={2} component="section" sx={{ p: 2 }}>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Avatar
          alt="Remy Sharp"
          src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
        />
        <Typography variant="subtitle1">Rohit Khairmode</Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="body1" sx={{ opacity: "50%" }}>
          Favorites
        </Typography>
        <Typography variant="body1" sx={{ opacity: "50%" }}>
          Recently
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        sx={{ pl: "4px" }}
      >
        <CircleIcon sx={{ fontSize: "12px", opacity: "50%" }} />
        <Typography variant="body1">Overview</Typography>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        sx={{ pl: "4px" }}
      >
        <CircleIcon sx={{ fontSize: "12px", opacity: "50%" }} />
        <Typography variant="body1">Projects</Typography>
      </Stack>
    </Stack>
  );
}

export default UserProfile;
