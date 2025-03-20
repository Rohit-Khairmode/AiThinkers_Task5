"use client";
import { useEditIconContext } from "@/context/ShowEditIconContext";
import { axiosInstance } from "@/utils/axios";
import { Edit } from "@mui/icons-material";
import { Box, Button, Modal, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { z } from "zod";
import ToastMsg from "../material-ui-wrapper/ToastMsg";
import SubTitle1 from "../material-ui-wrapper/Typography/SubTitle1";
import SubTitle2 from "../material-ui-wrapper/Typography/SubTitle2";
import { TabUpdateSchema } from "@/utils/zodSchema";
import { CustomModal } from "../material-ui-wrapper/CustomModal";
export type TabType = {
  title: string;
  count: number;
  countChange: string;
  color: string;
};

function Tab({ data }: { data: TabType }) {
  const [curData, setCurData] = useState<TabType>(data);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { editable, setEditable } = useEditIconContext();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<z.infer<typeof TabUpdateSchema>>({
    title: data.title,
    count: data.count,
    countChange: data.countChange,
  });
  const handleClose = () => {
    setOpen(false);
    setEditable(false);
  };
  const handleEdit = async () => {
    setIsLoading(true);
    try {
      TabUpdateSchema.parse(formData);
      const response = await axiosInstance.patch("/data/tabs", formData);
      setCurData(response.data);
    } catch (e: any) {
      console.error(e.response.data.error);
      setError(e.response.data.error);
    } finally {
      handleClose();
      setIsLoading(false);
    }
  };
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Box
        bgcolor={curData.color}
        padding={"16px"}
        sx={{ borderRadius: "12%", color: "#2a2a2a" }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <SubTitle2>{curData.title}</SubTitle2>
          {editable && (
            <Button color={"inherit"} onClick={handleOpen}>
              <Edit />
            </Button>
          )}
        </Stack>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <SubTitle1>{formatNumber(curData.count)}</SubTitle1>
          <SubTitle2>{curData.countChange}%</SubTitle2>
        </Stack>
      </Box>
      {open && (
        <CustomModal open={open} handleClose={handleClose}>
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <TextField
              value={formData.count}
              onChange={(e) =>
                setFormData(() => ({
                  ...formData,
                  count: Number(e.target.value),
                }))
              }
              id="outlined-basic"
              label="Count"
              variant="outlined"
            />
            <TextField
              value={formData.countChange}
              onChange={(e) =>
                setFormData(() => ({
                  ...formData,
                  countChange: e.target.value,
                }))
              }
              id="outlined-basic"
              label="Count Change Percentage"
              variant="outlined"
            />
          </Stack>
          <Button
            variant="outlined"
            onClick={handleEdit}
            disabled={isLoading}
            sx={{ mt: 2 }}
          >
            {isLoading ? "Updating..." : "Update"}
          </Button>
        </CustomModal>
      )}
      {error && (
        <ToastMsg
          severity="error"
          open={Boolean(error)}
          onAlertClose={() => setError("")}
        >
          {error}
        </ToastMsg>
      )}
    </>
  );
}
const formatNumber = (num: number) => {
  return num.toLocaleString("en-IN");
};
export default Tab;
