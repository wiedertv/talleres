import { DashboardProvider } from '@/lib/contexts/DashboardContext';
import Sidebar from '@/components/ui/sidebar';
import Header from '@/components/ui/header';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<DashboardProvider>
			<div className="flex h-screen bg-gray-100 text-gray-800">
				<Sidebar />
				<div className="flex-1 flex flex-col overflow-hidden">
					<Header />
					<ScrollArea className="h-[95vh]">{children}</ScrollArea>
				</div>
			</div>
		</DashboardProvider>
	);
}
