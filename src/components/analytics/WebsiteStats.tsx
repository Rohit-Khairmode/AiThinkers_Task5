"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Skeleton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import SubTitle2 from "../material-ui-wrapper/Typography/SubTitle2";
import { useDataFetcher } from "@/utils/useDataFetcher";
import { Edit } from "@mui/icons-material";
import { useEditIconContext } from "@/context/ShowEditIconContext";
import GeneralGraph from "../GeneralGraph";
import { useState } from "react";
enum Traffic {
  medium = "medium",
  low = "low",
  high = "high",
}
export type WebSiteStatType = {
  name: string;
  traffic: Traffic;
};
const WesiteStatContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  padding: "10px",
  borderRadius: "10px",
  color: "#2a2a2a",
}));
function WebsiteStats() {
  const { data, error, isLoading, setdata } =
    useDataFetcher("data/webSiteData");
  const { editable } = useEditIconContext();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <GeneralGraph
      query="data/webSiteData"
      open={open}
      setOpen={setOpen}
      error={error}
      isLoading={isLoading}
      setState={setdata}
    >
      <WesiteStatContainer spacing={1}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1">Traffic By Website</Typography>
          {editable && (
            <Button color="inherit" onClick={() => setOpen(true)}>
              <Edit />
            </Button>
          )}
        </Stack>
        {data?.map((cur: WebSiteStatType) => {
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
    </GeneralGraph>
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
