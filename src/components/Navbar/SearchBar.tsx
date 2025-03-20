"use client";
import { useDarkModeContext } from "@/context/DarkModeContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import {
  Box,
  IconButton,
  InputBase,
  Stack,
  styled,
  Tooltip,
} from "@mui/material";
import { useState } from "react";

import { useAuth } from "@/context/AuthContext";
import { useSideBarContext } from "@/context/SideBarContext";
import { AuthContextType } from "@/utils/types";
import { Edit, EditOutlined, Logout } from "@mui/icons-material";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import { useRouter } from "next/navigation";
import ToolTipIconButton from "../material-ui-wrapper/ToolTipIconButton";
import { useEditIconContext } from "@/context/ShowEditIconContext";
const Search = styled("div")(({ theme }) => ({
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
}));
const CustomInput = styled(InputBase)({
  "& input::placeholder": {
    color: "#666",
    fontSize: "14px",
    opacity: 1,
  },
});
function SearchBar() {
  const router = useRouter();
  const authContextRespone: AuthContextType | null = useAuth();
  if (!authContextRespone) throw new Error("Problem in context");
  const { user, setUser }: AuthContextType = authContextRespone;
  const [searchKey, setSearchKey] = useState<string>("");
  const { mode, toggleDarkMode } = useDarkModeContext();
  const { rightSidebar, toggleRightSideBar } = useSideBarContext();
  const { editable, setEditable } = useEditIconContext();
  const handleLogout = () => {
    setUser(null);
    router.push("/"); // Redirect to login page
  };
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={1}>
      <Search
        sx={{
          backgroundColor: `${mode == "light" ? "#eee" : "white"}`,
        }}
      >
        <CustomInput
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Search..."
        />
      </Search>
      <ToolTipIconButton
        title={`Switch to ${mode === "light" ? "dark" : "light"}`}
        onClick={toggleDarkMode}
      >
        {mode === "light" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </ToolTipIconButton>
      <ToolTipIconButton
        title={`${editable ? "Disable" : "Enable"} Edit`}
        onClick={() => {
          setEditable(!editable);
        }}
      >
        {editable ? <EditOutlined /> : <Edit />}
      </ToolTipIconButton>
      <ToolTipIconButton title="LogOut" onClick={handleLogout}>
        <Logout />
      </ToolTipIconButton>
      <ToolTipIconButton
        title="toggleSideBar"
        onClick={toggleRightSideBar}
        sx={{ display: "flex", alignItems: "end" }}
      >
        {rightSidebar ? <ViewSidebarOutlinedIcon /> : <ViewSidebarIcon />}
      </ToolTipIconButton>
    </Stack>
  );
}

export default SearchBar;
