"use client";
import { DataFetcherResponse, useDataFetcher } from "@/utils/useDataFetcher";
import { Box, Skeleton, SkeletonTypeMap, Stack } from "@mui/material";
import { JSX } from "react";
import ToastMsg from "../material-ui-wrapper/ToastMsg";
import Tab from "./Tab";
// const data = [
//   {
//     title: "Views",
//     count: "7,265",
//     countChange: "+11.01%",
//     icon: <TrendingUpIcon />,
//     color: "#EDEEFC",
//   },
//   {
//     title: "Visits",
//     count: "3,671",
//     countChange: "-0.03%",
//     icon: <TrendingDownIcon />,
//     color: "#E6F1FD",
//   },
//   {
//     title: "New Users",
//     count: "156 ",
//     countChange: "+15.03%",
//     icon: <TrendingUpIcon />,
//     color: "#EDEEFC",
//   },
//   {
//     title: "Active Users",
//     count: "2,318",
//     countChange: "+6.08%",
//     icon: <TrendingUpIcon />,
//     color: "#E6F1FD",
//   },
// ];
export type TabData = {
  title: string;
  count: number;
  countChange: string;
  icon: JSX.Element;
  color: string;
};

function Tabs() {
  const {
    data: tabsData,
    error,
    isLoading,
  }: DataFetcherResponse = useDataFetcher("data/tabs");

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "8px",
      }}
    >
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => (
            <TabSkeleton animationStyle={"pulse"} key={`tab${index}`} />
          ))
        : tabsData.map((cur: TabData) => (
            <Tab data={cur} key={cur.countChange} />
          ))}

      {!isLoading && tabsData.length === 0 && (
        <>
          <ToastMsg severity="error" open={Boolean(error)}>
            Error While fetching statistics
          </ToastMsg>
          {Array.from({ length: 4 }).map((_, index) => (
            <TabSkeleton animationStyle={false} key={`tabError${index}`} />
          ))}
        </>
      )}
    </Box>
  );
}
function TabSkeleton({
  animationStyle = "wave",
}: {
  animationStyle?: "wave" | "pulse" | false;
}) {
  return (
    <Box
      bgcolor="#ddd"
      padding="16px"
      sx={{ borderRadius: "12%", color: "black" }}
    >
      <BalckSkeleton
        animationStyle={animationStyle}
        variant="text"
        width={100}
        height={20}
      />
      <Stack direction="row" spacing={2} alignItems="center">
        <BalckSkeleton
          animationStyle={animationStyle}
          variant="text"
          width={50}
          height={30}
        />
        <BalckSkeleton
          animationStyle={animationStyle}
          variant="text"
          width={50}
          height={20}
        />
        <BalckSkeleton
          animationStyle={animationStyle}
          variant="circular"
          width={24}
          height={24}
        />
      </Stack>
    </Box>
  );
}
function BalckSkeleton({
  animationStyle = "wave",
  variant,
  width,
  height,
  sx,
}: {
  animationStyle?: "wave" | "pulse" | false;
  variant: SkeletonTypeMap["props"]["variant"];
  width: number | string;
  height: number | string;
  sx?: object;
}) {
  return (
    <Skeleton
      animation={animationStyle}
      variant={variant}
      width={width}
      height={height}
      sx={{ bgcolor: "#666", ...sx }}
    />
  );
}
export default Tabs;
