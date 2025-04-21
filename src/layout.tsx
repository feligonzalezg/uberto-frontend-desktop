import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import AppSidebar from "./components/sidebar/sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

const Layout = () => (
  <>
    <SidebarProvider defaultOpen={false}>
      <Header />
      <AppSidebar />
      <main className="pt-10 pb-10">
        <Outlet />
      </main>
    </SidebarProvider>
  </>
);

export default Layout;
