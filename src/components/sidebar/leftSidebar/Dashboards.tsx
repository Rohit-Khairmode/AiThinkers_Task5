"use client";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import PieChartIcon from "@mui/icons-material/PieChart";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FolderIcon from "@mui/icons-material/Folder";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useReducer } from "react";
const initialState = {
  eCommerce: false,
  projects: false,
};
const reducer = (
  state: {
    eCommerce: boolean;
    projects: boolean;
  },
  action: { type: string }
) => {
  switch (action.type) {
    case "eCommerce":
      return { ...state, eCommerce: !state.eCommerce };
    case "projects":
      return { ...state, projects: !state.projects };
    default:
      return state;
  }
};
function Dashboards() {
  const [listOpen, dispatch] = useReducer(reducer, initialState);
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        borderRadius: "50%",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ backgroundColor: "inherit" }}
        >
          Dashboards
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <PieChartIcon />
        </ListItemIcon>
        <ListItemText primary="Overview" sx={{ fontSize: "36px" }} />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          console.log("clicked", listOpen);
          dispatch({ type: "eCommerce" });
        }}
      >
        {!listOpen.eCommerce ? <ChevronRightIcon /> : <ExpandMore />}
        <ListItemIcon>
          <BusinessCenterIcon />
        </ListItemIcon>
        <ListItemText primary="eCommerce" />
      </ListItemButton>
      <Collapse in={listOpen.eCommerce} timeout="auto" unmountOnExit></Collapse>
      <ListItemButton
        onClick={() => {
          console.log("clicked", listOpen);
          dispatch({ type: "projects" });
        }}
      >
        {!listOpen.projects ? <ChevronRightIcon /> : <ExpandMore />}
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItemButton>
      <Collapse in={listOpen.projects} timeout="auto" unmountOnExit></Collapse>
    </List>
  );
}

export default Dashboards;
