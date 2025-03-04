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
import CustomList from "@/components/material-ui-wrapper/CustomList";
import IconText from "@/components/material-ui-wrapper/IconText";
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
    <CustomList subHeaderTitle="Dashboard">
      <ListItemButton>
        <IconText icon={<PieChartIcon />} text="Overview" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          console.log("clicked", listOpen);
          dispatch({ type: "eCommerce" });
        }}
      >
        {!listOpen.eCommerce ? <ChevronRightIcon /> : <ExpandMore />}
        <IconText icon={<BusinessCenterIcon />} text="eCommerce" />
      </ListItemButton>
      <Collapse in={listOpen.eCommerce} timeout="auto" unmountOnExit>
        {/*any nested list will go here */}
      </Collapse>
      <ListItemButton
        onClick={() => {
          console.log("clicked", listOpen);
          dispatch({ type: "projects" });
        }}
      >
        {!listOpen.projects ? <ChevronRightIcon /> : <ExpandMore />}
        <IconText icon={<FolderIcon />} text="Projects" />
      </ListItemButton>
    </CustomList>
  );
}

export default Dashboards;
