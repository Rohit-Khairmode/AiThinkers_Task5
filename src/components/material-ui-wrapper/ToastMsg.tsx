import { WrapperComponetBaseProps } from "@/utils/types";
import {
  Alert,
  AlertColor,
  Snackbar,
  SnackbarCloseReason,
  SnackbarOrigin,
  SxProps,
} from "@mui/material";

interface toastMsg {
  open: boolean;
  autoHideDuration?: number;
  onSnackBarClose?:
    | ((
        event: React.SyntheticEvent<any> | Event,
        reason: SnackbarCloseReason
      ) => void)
    | undefined;
  onAlertClose?: ((event: React.SyntheticEvent) => void) | undefined;
  anchorOrigin?: SnackbarOrigin | undefined;
  severity?: AlertColor | undefined;
  AlertSx?: SxProps;
  SnackBarSx?: SxProps;
  children: React.ReactNode;
}

function ToastMsg({
  children,
  open,
  autoHideDuration = 3000,
  onSnackBarClose,
  onAlertClose,
  anchorOrigin = { vertical: "top", horizontal: "center" },
  severity = "success",
  AlertSx,
  SnackBarSx,
}: toastMsg) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onSnackBarClose}
      anchorOrigin={anchorOrigin}
      sx={SnackBarSx}
    >
      <Alert onClose={onAlertClose} severity={severity} sx={AlertSx}>
        {children}
      </Alert>
    </Snackbar>
  );
}

export default ToastMsg;
