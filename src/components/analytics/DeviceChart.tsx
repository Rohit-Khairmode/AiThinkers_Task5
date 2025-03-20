"use client";
import { useEditIconContext } from "@/context/ShowEditIconContext";
import { DataFetcherResponse, useDataFetcher } from "@/utils/useDataFetcher";
import { Edit } from "@mui/icons-material";
import { Button, Card, CardContent, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import GeneralGraph from "../GeneralGraph";
import H6 from "../material-ui-wrapper/Typography/H6";

export type DeviceCountType = {
  name: string;
  value: number;
};
function DeviceChart() {
  const { editable } = useEditIconContext();
  const [open, setOpen] = useState<boolean>(false);
  const { data, error, isLoading, setdata }: DataFetcherResponse =
    useDataFetcher("data/deviceCount");

  return (
    <GeneralGraph
      query={"data/deviceCount"}
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
            <H6>Traffic by Device</H6>

            {editable && (
              <Button color="inherit" onClick={() => setOpen(true)}>
                <Edit />
              </Button>
            )}
          </Stack>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </GeneralGraph>
  );
}

export default DeviceChart;
