import { WrapperComponetBaseProps } from "@/utils/types";
import { Typography } from "@mui/material";

function H5({ children, sx }: WrapperComponetBaseProps) {
  return (
    <Typography sx={sx} variant="h5" fontWeight="bold" textAlign="center">
      {children}
    </Typography>
  );
}

export default H5;
