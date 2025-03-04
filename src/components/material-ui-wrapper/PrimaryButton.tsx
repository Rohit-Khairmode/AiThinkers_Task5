import { WrapperComponetBaseProps } from "@/utils/types";
import { Button, SxProps } from "@mui/material";
interface PrimaryButton extends WrapperComponetBaseProps {
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}
function PrimaryButton({
  children,
  type = "submit",
  fullWidth = true,
  sx,
}: PrimaryButton) {
  return (
    <Button
      type={type}
      fullWidth={fullWidth}
      variant="contained"
      color="primary"
      sx={sx}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
