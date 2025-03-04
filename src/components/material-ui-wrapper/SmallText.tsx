import { WrapperComponetBaseProps } from "@/utils/types";
import { Typography } from "@mui/material";
import { MouseEventHandler } from "react";

interface SmallText extends WrapperComponetBaseProps {
  onClick?: MouseEventHandler<HTMLSpanElement>;
}
function SmallText({ children, sx, onClick }: SmallText) {
  return (
    <Typography
      sx={sx}
      variant="body2"
      color="primary"
      textAlign="center"
      onClick={onClick}
    >
      {children}
    </Typography>
  );
}

export default SmallText;
