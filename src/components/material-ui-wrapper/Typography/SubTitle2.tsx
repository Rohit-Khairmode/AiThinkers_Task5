import { WrapperComponetBaseProps } from "@/utils/types";
import { Typography } from "@mui/material";

function SubTitle2({ children, sx }: WrapperComponetBaseProps) {
  return (
    <Typography variant="subtitle2" sx={sx}>
      {children}
    </Typography>
  );
}

export default SubTitle2;
