'use client';

import { useDashboard } from '@/lib/contexts/DashboardContext';
import { Car, ChartBar, ChevronRight, CircleGauge, Settings, Star, Users, Wrench } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
	const { sidebarOpen, toggleSidebar } = useDashboard();
	const pathname = usePathname();

	const menuItems = [
		{ id: 'dashboard', icon: <CircleGauge />, label: 'Dashboard', path: '/panel-administrativo' },
		{ id: 'clientes', icon: <Users />, label: 'Clientes', path: '/panel-administrativo/clientes' },
		{ id: 'vehiculos', icon: <Car />, label: 'Vehículos', path: '/panel-administrativo/vehiculos' },
		{ id: 'servicios', icon: <Wrench />, label: 'Servicios', path: '/panel-administrativo/servicios' },
		{ id: 'repuestos', icon: <Settings />, label: 'Repuestos', path: '/panel-administrativo/repuestos' },
		{ id: 'fidelizacion', icon: <Star />, label: 'Fidelización', path: '/panel-administrativo/fidelizacion' },
		{ id: 'reportes', icon: <ChartBar />, label: 'Reportes', path: '/panel-administrativo/reportes' },
		{ id: 'configuracion', icon: <Settings />, label: 'Configuración', path: '/panel-administrativo/configuracion' },
	];

	return (
		<div className={`bg-white shadow-md transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
			<div className="p-4 flex items-center justify-between border-b">
				<div className={`flex items-center ${sidebarOpen ? '' : 'justify-center w-full'}`}>
					<div className="bg-blue-500 text-white h-10 w-10 rounded-full flex items-center justify-center">
						<Wrench />
					</div>
					{sidebarOpen && <span className="ml-2 font-bold text-lg">AutoTaller</span>}
				</div>
				<button
					onClick={toggleSidebar}
					className="text-gray-500 hover:text-blue-500 cursor-pointer !rounded-button whitespace-nowrap"
				>
					{sidebarOpen ? <ChevronRight /> : <ChevronRight />}
				</button>
			</div>
			<div className="py-4">
				<ul>
					{menuItems.map((item) => (
						<li key={item.id} className="mb-1">
							<Link href={item.path}>
								<div
									className={`flex items-center px-4 py-3 w-full text-left transition-colors ${
										pathname === item.path
											? 'bg-blue-500/10 text-blue-500 border-l-4 border-blue-500'
											: 'text-gray-600 hover:bg-gray-100'
									} cursor-pointer !rounded-button whitespace-nowrap`}
								>
									{item.icon}
									{sidebarOpen && <span className="ml-3">{item.label}</span>}
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
