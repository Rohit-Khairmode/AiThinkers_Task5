import { WrapperComponetBaseProps } from "@/utils/types";
import { Paper } from "@mui/material";

interface ElevatedDivProps extends WrapperComponetBaseProps {
  elevation?: number;
}
function ElevatedDiv({ children, sx, elevation = 3 }: ElevatedDivProps) {
  return (
    <Paper
      elevation={elevation}
      sx={{
        padding: 3,
        maxWidth: 400,
        margin: "auto",
        marginTop: 5,
        borderRadius: 2,
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
}

export default ElevatedDiv;
