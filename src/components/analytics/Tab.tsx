import { Box, Stack, Typography } from "@mui/material";
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
      <Typography variant="subtitle2">{data.title}</Typography>
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <Typography variant="subtitle1">{data.count}</Typography>
        <Typography variant="subtitle2">{data.countChange}</Typography>
        {data.icon}
      </Stack>
    </Box>
  );
}

export default Tab;
