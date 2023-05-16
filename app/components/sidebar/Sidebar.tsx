import getCurrentUser from "@/app/actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar"
import MobileFooter from "./MobileFooter"

async function Sidebar({ children }: { children: React.ReactNode }) {
    const currentUser = await getCurrentUser();
    return (
        <div className="h-full">
            <DesktopSidebar currentUser={currentUser!} />
            <MobileFooter />
            <main className="lg:pg-20 lg:ml-20 lg:pb-0 pb-14 h-full">
                {children}
            </main>
        </div>
    )
}

export default Sidebar
