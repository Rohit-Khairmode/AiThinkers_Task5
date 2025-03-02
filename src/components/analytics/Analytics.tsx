import { Box, Stack } from "@mui/material";
import DeviceChart from "./DeviceChart";
import LocationChart from "./LocationChart";
import Tabs from "./Tabs";
import UsersChart from "./UsersChart";
import WebsiteStats from "./WebsiteStats";

function Analytics() {
  return (
    <Stack spacing={2} sx={{ mt: "20px" }}>
      <Tabs />
      <Box
        sx={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px" }}
      >
        <UsersChart />
        <WebsiteStats />
      </Box>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
      >
        <DeviceChart />
        <LocationChart />
      </Box>
    </Stack>
  );
}

export default Analytics;
