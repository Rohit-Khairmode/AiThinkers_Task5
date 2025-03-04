"use client";
import {
  Box,
  Card,
  CardContent,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import SubTitle2 from "../material-ui-wrapper/Typography/SubTitle2";
enum Traffic {
  medium = "medium",
  low = "low",
  high = "high",
}
type WebSiteStatType = {
  name: string;
  traffic: Traffic;
};
const data: WebSiteStatType[] = [
  { name: "Google", traffic: Traffic.medium },
  { name: "Instagram", traffic: Traffic.low },
  { name: "Youtube", traffic: Traffic.medium },
  { name: "Twitter", traffic: Traffic.high },
  { name: "Facebook", traffic: Traffic.low },
];
const WesiteStatContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  padding: "10px",
  borderRadius: "10px",
  color: "#2a2a2a",
}));
function WebsiteStats() {
  return (
    <WesiteStatContainer spacing={1}>
      <Typography variant="subtitle1">Traffic By Website</Typography>
      {data.map((cur) => {
        return (
          <Box
            key={cur.name}
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Box maxWidth={"50px"}>
              <SubTitle2>{cur.name}</SubTitle2>
            </Box>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              {cur.traffic === "low" &&
                [true, false, false].map((cur) => {
                  return <Slide isFilled={cur} key={Math.random()} />;
                })}
              {cur.traffic === "medium" &&
                [true, true, false].map((cur) => {
                  return <Slide isFilled={cur} key={Math.random()} />;
                })}
              {cur.traffic === "high" &&
                [true, true, true].map((cur) => {
                  return <Slide isFilled={cur} key={Math.random()} />;
                })}
            </Stack>
          </Box>
        );
      })}
    </WesiteStatContainer>
  );
}

function Slide({ isFilled }: { isFilled: boolean }) {
  return (
    <Card
      sx={{
        width: 50,
        height: 10,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: `${isFilled ? "#666" : "#fff"}`,
      }}
    >
      <CardContent>
        <Typography variant="h6" align="center">
          Rectangle
        </Typography>
      </CardContent>
    </Card>
  );
}
export default WebsiteStats;
