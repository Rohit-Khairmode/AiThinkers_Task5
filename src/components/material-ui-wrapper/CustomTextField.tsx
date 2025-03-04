import { WrapperComponetBaseProps } from "@/utils/types";
import { TextField } from "@mui/material";

interface CustomTextFieldProps extends WrapperComponetBaseProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  type?: string;
  fullWidth?: boolean;
  variant?: "outlined" | "filled" | "standard";
  margin?: "none" | "dense" | "normal";
  helperText?: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  fullWidth = true,
  variant = "outlined",
  margin = "normal",
  helperText,
  sx,
}) => {
  return (
    <TextField
      sx={sx}
      fullWidth={fullWidth}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      variant={variant}
      margin={margin}
      error={Boolean(error)}
      helperText={helperText || ""}
    />
  );
};

export default CustomTextField;
