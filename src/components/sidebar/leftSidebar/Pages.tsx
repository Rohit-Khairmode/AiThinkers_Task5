"use client";
import CustomList from "@/components/material-ui-wrapper/CustomList";
import IconText from "@/components/material-ui-wrapper/IconText";
import { ExpandMore } from "@mui/icons-material";
import BookIcon from "@mui/icons-material/Book";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React, { useReducer } from "react";
type StateType = {
  Profile: boolean;
  Account: boolean;
  Corporate: boolean;
  Blog: boolean;
  Social: boolean;
};
const initialState: StateType = {
  Profile: false,
  Account: false,
  Corporate: false,
  Blog: false,
  Social: false,
};
const reducer = (state: StateType, action: { type: string }) => {
  switch (action.type) {
    case "Profile":
      return { ...state, Profile: !state.Profile };
    case "Account":
      return { ...state, Account: !state.Account };
    case "Corporate":
      return { ...state, Corporate: !state.Corporate };
    case "Blog":
      return { ...state, Blog: !state.Blog };
    case "Social":
      return { ...state, Social: !state.Social };
    default:
      return state;
  }
};
const MainPages = [
  {
    name: "Profile",
    icon: <ContactPageIcon />,
    sublist: ["Overview", "Projects", "Compaines", "Document", "Followers"],
  },
  { name: "Account", icon: <RecentActorsIcon />, sublist: [] },
  { name: "Corporate", icon: <CorporateFareIcon />, sublist: [] },
  { name: "Blog", icon: <BookIcon />, sublist: [] },
  { name: "Social", icon: <ConnectWithoutContactIcon />, sublist: [] },
];

function Pages() {
  const [listOpen, dispatch] = useReducer(reducer, initialState);
  return (
    <CustomList subHeaderTitle="Pages">
      {MainPages.map((curPage) => {
        return (
          <React.Fragment key={curPage.name}>
            <ListItemButton
              onClick={() => {
                console.log("clicked", listOpen);
                dispatch({ type: curPage.name });
              }}
            >
              {!listOpen[curPage.name as keyof StateType] ? (
                <ChevronRightIcon />
              ) : (
                <ExpandMore />
              )}
              <IconText icon={curPage.icon} text={curPage.name} />
            </ListItemButton>
            <Collapse
              in={listOpen[curPage.name as keyof StateType]}
              timeout="auto"
              unmountOnExit
            >
              <List
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                }}
                disablePadding
              >
                {curPage.sublist.map((cur) => {
                  return (
                    <ListItemButton sx={{ pl: 4 }} key={cur}>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={cur} />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>
          </React.Fragment>
        );
      })}
    </CustomList>
  );
}

export default Pages;
