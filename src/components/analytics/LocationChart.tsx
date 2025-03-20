"use client";
import { useEditIconContext } from "@/context/ShowEditIconContext";
import { useDataFetcher } from "@/utils/useDataFetcher";
import { Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import GeneralGraph from "../GeneralGraph";
import H6 from "../material-ui-wrapper/Typography/H6";
export type LocationWiseTraffic = {
  name: string;
  value: number;
  color: string;
};
function LocationChart() {
  const { data, error, isLoading, setdata } = useDataFetcher(
    "data/locationWiseTraffic"
  );
  const { editable } = useEditIconContext();
  const [open, setOpen] = useState<boolean>(false);
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
          Error While fetching Location wise traffic data
        </Typography>
      </Box>
    );
  return (
    <GeneralGraph
      query={"data/locationWiseTraffic"}
      open={open}
      setOpen={setOpen}
      error={error}
      isLoading={isLoading}
      setState={setdata}
    >
      <Card sx={{ flex: 1, p: 2, borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Stack
            direction="row"
            spacing={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <H6>Traffic by Location</H6>

            {editable && (
              <Button color="inherit" onClick={() => setOpen(true)}>
                <Edit />
              </Button>
            )}
          </Stack>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {data?.map((entry: LocationWiseTraffic, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </GeneralGraph>
  );
}

export default LocationChart;
