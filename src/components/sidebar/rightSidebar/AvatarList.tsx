import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
export type AvatarListData = {
  id: number;
  heading: string;
  subHeading?: string;
  icon?: React.ReactNode;
  imageUrl?: string;
}[];

function AvatarList({ data }: { data: AvatarListData }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      {data.map((cur) => {
        return (
          <ListItem alignItems="flex-start" key={cur.id}>
            {cur.icon ? (
              <ListItemIcon>{cur.icon}</ListItemIcon>
            ) : (
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={cur.imageUrl} />
              </ListItemAvatar>
            )}
            <ListItemText
              primary={cur.heading}
              secondary={cur.subHeading}
              sx={{ fontSize: "16px" }}
            />
          </ListItem>
        );
      })}
    </List>
  );
}

export default AvatarList;
