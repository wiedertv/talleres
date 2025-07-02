import {DashboardProvider} from "@/lib/contexts/DashboardContext"
import Sidebar from "@/components/ui/sidebar";
import Header from "@/components/ui/header";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <DashboardProvider>
            <div className="flex h-screen bg-[#F5F5F5] text-[#333333] font-['Inter',sans-serif]">
                <Sidebar/>
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header/>
                    {children}
                </div>
            </div>
        </DashboardProvider>
    )
}