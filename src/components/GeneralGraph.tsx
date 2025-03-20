import { useEditIconContext } from "@/context/ShowEditIconContext";
import { axiosInstance } from "@/utils/axios";
import { Box, Skeleton, Typography } from "@mui/material";
import { useState } from "react";
import { FileUploadModal } from "./FileUploadModal";
import ToastMsg from "./material-ui-wrapper/ToastMsg";
import { set } from "zod";

function GeneralGraph({
  query,
  children,
  open,
  setOpen,
  setState,
  isLoading,
  error,
}: {
  query: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  isLoading: boolean;
  setState: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [fileUploadError, setFileUploadError] = useState<string>("");
  const [fileUploadSuccess, setFileUploadSuccess] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const { setEditable } = useEditIconContext();

  async function handleFileUpload(files: FileList | null) {
    setUploading(true);
    setFileUploadError("");
    setFileUploadSuccess("");
    if (files?.length === 0 || files === null) {
      setFileUploadError("No file selected");
      return;
    }
    try {
      const { data } = await axiosInstance.put(
        query,
        {
          file: files[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setState(data);
      setFileUploadSuccess("File uploaded successfully");
    } catch (error: any) {
      console.error(
        "DeviceChart handleFile Upload catch block",
        error.response.data.error
      );
      setFileUploadError(error.response.data.error);
    } finally {
      setOpen(false);
      setEditable(false);
      setUploading(false);
    }
  }
  if (isLoading)
    return (
      <Box
        sx={{
          width: "100%",
          height: 250,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Skeleton variant="rectangular" width="100%" height={200} />
      </Box>
    );
  if (!isLoading && error)
    return (
      <Box
        sx={{
          width: "100%",
          height: 250,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6" color="error">
          Error While fetching Devices data
        </Typography>
      </Box>
    );

  return (
    <>
      {children}
      {open && (
        <FileUploadModal
          open={open}
          setOpen={setOpen}
          handleFileUpload={handleFileUpload}
          uploading={uploading}
        />
      )}
      {(fileUploadError || fileUploadSuccess) && (
        <ToastMsg
          open={Boolean(fileUploadError || fileUploadSuccess)}
          onAlertClose={() => {
            setFileUploadError("");
            setFileUploadSuccess("");
          }}
          severity={fileUploadError ? "error" : "success"}
        >
          {fileUploadError || fileUploadSuccess}
        </ToastMsg>
      )}
    </>
  );
}

export default GeneralGraph;
