import { useBreakpointValue } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { SidebarNav } from "./Sidebar";

export function Navigation() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!!isDrawerSidebar) {
    return <SidebarNav />
  }

  return <Navbar />
}