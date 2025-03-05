import { WrapperComponetBaseProps } from "@/utils/types";
import { TextField } from "@mui/material";
type style = {
  fullWidth?: boolean;
  variant?: "outlined" | "filled" | "standard";
  margin?: "none" | "dense" | "normal";
};
interface CustomTextFieldProps extends WrapperComponetBaseProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  type?: string;
  style?: style;
  helperText?: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  style,
  helperText,
  sx,
}) => {
  return (
    <TextField
      sx={sx}
      fullWidth={style?.fullWidth || true}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      variant={style?.variant || "outlined"}
      margin={style?.margin || "normal"}
      error={Boolean(error)}
      helperText={helperText || ""}
    />
  );
};

export default CustomTextField;
