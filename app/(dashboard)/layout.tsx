import Sidebar from "./_components/sidebar";
import OrgSidebar from "./_components/orgSidebar/orgSidebar";
import NavBar from "./_components/navBar/navBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-[100%] bg-[#EFE8F7]  max-w-[100%]">
      <Sidebar />
      <div className="lg:pl-[60px]  h-full">
        <div className="flex gap-x-3  h-[100vh]">
          <OrgSidebar />
          <div className="h-full flex-1">
            <NavBar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;

// bg-[url('/Curve.svg')]
