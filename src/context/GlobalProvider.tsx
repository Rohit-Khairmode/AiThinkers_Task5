import theme from "@/utils/theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import DarkModeContextProvider from "./DarkModeContext";
import SideBarContextProvider from "./SideBarContext";
import { AuthContextProvider } from "./AuthContext";

function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <DarkModeContextProvider>
            <SideBarContextProvider>{children}</SideBarContextProvider>
          </DarkModeContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default GlobalProvider;
