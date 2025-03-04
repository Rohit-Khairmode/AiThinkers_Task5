import { WrapperComponetBaseProps } from "@/utils/types";
import { List, ListSubheader, SxProps } from "@mui/material";
interface CustomList extends WrapperComponetBaseProps {
  listStyle?: SxProps;
  subHeaderStyle?: SxProps;
  subHeaderTitle: string;
}
function CustomList({
  children,
  listStyle,
  subHeaderStyle,
  subHeaderTitle,
}: CustomList) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        borderRadius: "50%",
        ...listStyle,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ backgroundColor: "inherit", ...subHeaderStyle }}
        >
          {subHeaderTitle}
        </ListSubheader>
      }
    >
      {children}
    </List>
  );
}

export default CustomList;
