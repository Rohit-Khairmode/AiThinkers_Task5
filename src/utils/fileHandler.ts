import path from "path";
import fs from "fs";
import { LineDataType, ServerUser, TabsInFile } from "@/utils/types";
import { DeviceCountType } from "@/components/analytics/DeviceChart";
import { LocationWiseTraffic } from "@/components/analytics/LocationChart";
import { WebSiteStatType } from "@/components/analytics/WebsiteStats";

export const dataFile: string = path.join(process.cwd(), "data/users.json");
export const tabsFile: string = path.join(process.cwd(), "data/tabsData.json");
export const usersCountFile: string = path.join(
  process.cwd(),
  "data/usersCount.json"
);
export const deviceFilePath: string = path.join(
  process.cwd(),
  "data/deviceCount.json"
);
export const locationWiseTrafficFilePath: string = path.join(
  process.cwd(),
  "data/locationWiseTraffic.json"
);
export const WebSiteStatPath: string = path.join(
  process.cwd(),
  "data/webSiteStat.json"
);
//user data operations
export const readUser = (): ServerUser[] =>
  JSON.parse(fs.readFileSync(dataFile, "utf-8"));

export const writeUsers = (users: ServerUser[]): void =>
  fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));

// Tabs data operations
export const readTabsDetails = (): TabsInFile[] =>
  JSON.parse(fs.readFileSync(tabsFile, "utf-8"));

export const writeTabsDetails = (tabs: TabsInFile[]): void =>
  fs.writeFileSync(tabsFile, JSON.stringify(tabs, null, 2));

// Users Count data operations
export const readUsersCount = (): LineDataType[] =>
  JSON.parse(fs.readFileSync(usersCountFile, "utf-8"));

export const writeUsersCount = (usersCount: LineDataType[]): void =>
  fs.writeFileSync(usersCountFile, JSON.stringify(usersCount, null, 2));

// Device Count data operations
export const readDeviceCount = (): DeviceCountType[] =>
  JSON.parse(fs.readFileSync(deviceFilePath, "utf-8"));

export const writeDeviceDetails = (deviceDetails: DeviceCountType[]): void =>
  fs.writeFileSync(deviceFilePath, JSON.stringify(deviceDetails, null, 2));

// Location Wise Traffic data operations
export const readLocationWiseTraffic = (): LocationWiseTraffic[] =>
  JSON.parse(fs.readFileSync(locationWiseTrafficFilePath, "utf-8"));

export const writeLocationWiseTraffic = (
  locationWiseTrafficDetails: DeviceCountType[]
): void =>
  fs.writeFileSync(
    locationWiseTrafficFilePath,
    JSON.stringify(locationWiseTrafficDetails, null, 2)
  );

// Website Stats data operations
export const readWebSiteData = (): WebSiteStatType[] =>
  JSON.parse(fs.readFileSync(WebSiteStatPath, "utf-8"));

export const writeWebSiteData = (webSiteStatData: DeviceCountType[]): void =>
  fs.writeFileSync(WebSiteStatPath, JSON.stringify(webSiteStatData, null, 2));
