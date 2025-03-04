import { WrapperComponetBaseProps } from "@/utils/types";
import { Typography } from "@mui/material";

function SubTitle1({ children, sx }: WrapperComponetBaseProps) {
  return (
    <Typography variant="subtitle1" sx={sx}>
      {children}
    </Typography>
  );
}

export default SubTitle1;
