import { Box, Stack, Typography } from "@mui/material";
import SubTitle1 from "../material-ui-wrapper/Typography/SubTitle1";
import SubTitle2 from "../material-ui-wrapper/Typography/SubTitle2";
export type TabType = {
  title: string;
  count: string;
  countChange: string;
  icon: React.ReactNode;
  color: string;
};
function Tab({ data }: { data: TabType }) {
  return (
    <Box
      bgcolor={data.color}
      padding={"16px"}
      sx={{ borderRadius: "12%", color: "#2a2a2a" }}
    >
      <SubTitle2>{data.title}</SubTitle2>
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <SubTitle1>{data.count}</SubTitle1>
        <SubTitle2>{data.countChange}</SubTitle2>
        {data.icon}
      </Stack>
    </Box>
  );
}

export default Tab;
