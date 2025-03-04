import { WrapperComponetBaseProps } from "@/utils/types";
import { IconButton, SxProps, Tooltip } from "@mui/material";

interface ToolTipIconButtonProps extends WrapperComponetBaseProps {
  title: string;
  onClick?: () => void;
  iconStyle?: SxProps;
  arrow?: boolean;
}

function ToolTipIconButton({
  children,
  title,
  onClick,
  iconStyle,
  sx,
  arrow = true,
}: ToolTipIconButtonProps) {
  return (
    <Tooltip sx={sx} title={title} arrow={arrow}>
      <IconButton onClick={onClick} sx={iconStyle}>
        {children}
      </IconButton>
    </Tooltip>
  );
}

export default ToolTipIconButton;
