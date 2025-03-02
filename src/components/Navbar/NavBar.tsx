import { Divider, Stack } from "@mui/material";
import InfoBar from "./InfoBar";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <InfoBar />
        <SearchBar />
      </Stack>
      <Divider />
    </>
  );
}

export default NavBar;
