"use client";
import Analytics from "@/components/analytics/Analytics";
import NavBar from "@/components/Navbar/NavBar";
import SideBar from "@/components/sidebar/leftSidebar/SideBar";
import RightSideBar from "@/components/sidebar/rightSidebar/RightSideBar";
import { useAuth } from "@/context/AuthContext";
import { AuthContextType } from "@/utils/types";
import { Box, Container, Stack } from "@mui/material";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function page() {
  const authContextRespone: AuthContextType | null = useAuth();
  if (!authContextRespone) throw new Error("Problem in context");
  const { user }: AuthContextType = authContextRespone;
  const router: AppRouterInstance = useRouter();
  useEffect(() => {
    if (!user) {
      router.replace("/");
      return;
    }
  }, [user]);

  if (!user) {
    return null;
  }
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "auto 1fr auto" }}>
      <SideBar />
      <Box>
        <NavBar />
        <Container>
          <Analytics />
        </Container>
      </Box>
      <RightSideBar />
    </Box>
  );
}

export default page;
