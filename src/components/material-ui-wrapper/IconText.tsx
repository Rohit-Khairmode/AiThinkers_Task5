import { ListItemIcon, ListItemText, SxProps } from "@mui/material";

interface IconText {
  icon: React.ReactNode;
  text: string;
  textStyle?: SxProps;
  iconStyle?: SxProps;
}
function IconText({ icon, text, textStyle, iconStyle }: IconText) {
  return (
    <>
      <ListItemIcon sx={iconStyle}>{icon}</ListItemIcon>
      <ListItemText primary={text} sx={textStyle} />
    </>
  );
}

export default IconText;
