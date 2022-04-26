import { Box } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import StickyFooter from "./StickyFooter";

function Layout({ children }: { children: JSX.Element }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <ResponsiveAppBar />
      <main>{children}</main>
      <StickyFooter />
    </Box>
  );
}

export default Layout;
