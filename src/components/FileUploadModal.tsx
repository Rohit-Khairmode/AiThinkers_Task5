import { Button, styled } from "@mui/material";
import { CustomModal } from "./material-ui-wrapper/CustomModal";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export function FileUploadModal({
  open,
  setOpen,
  handleFileUpload,
  uploading,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleFileUpload: (files: FileList | null) => void;
  uploading: boolean;
}) {
  return (
    <CustomModal open={open} handleClose={() => setOpen(false)}>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        sx={{ alignSelf: "center" }}
      >
        {uploading ? "Uploading...." : "Upload files"}
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => handleFileUpload(event.target.files)}
          multiple
        />
      </Button>
    </CustomModal>
  );
}
