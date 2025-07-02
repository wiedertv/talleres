'use client'

import {useDashboard} from '@/lib/contexts/DashboardContext'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function Sidebar() {
    const {sidebarOpen, toggleSidebar} = useDashboard()
    const pathname = usePathname()

    const menuItems = [
        {id: 'dashboard', icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/panel-administrativo'},
        {id: 'clientes', icon: 'fa-users', label: 'Clientes', path: '/panel-administrativo/clientes'},
        {id: 'vehiculos', icon: 'fa-car', label: 'Vehículos', path: '/panel-administrativo/vehiculos'},
        {id: 'servicios', icon: 'fa-tools', label: 'Servicios', path: '/panel-administrativo/servicios'},
        {id: 'repuestos', icon: 'fa-cogs', label: 'Repuestos', path: '/panel-administrativo/repuestos'},
        {id: 'fidelizacion', icon: 'fa-star', label: 'Fidelización', path: '/panel-administrativo/fidelizacion'},
        {id: 'reportes', icon: 'fa-chart-bar', label: 'Reportes', path: '/panel-administrativo/reportes'},
        {id: 'configuracion', icon: 'fa-cog', label: 'Configuración', path: '/panel-administrativo/configuracion'}
    ]

    return (
        <div className={`bg-white shadow-md transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
            <div className="p-4 flex items-center justify-between border-b">
                <div className={`flex items-center ${sidebarOpen ? '' : 'justify-center w-full'}`}>
                    <div className="bg-[#2A5C8F] text-white h-10 w-10 rounded-full flex items-center justify-center">
                        <i className="fas fa-wrench"></i>
                    </div>
                    {sidebarOpen && <span className="ml-2 font-bold text-lg">AutoTaller</span>}
                </div>
                <button
                    onClick={toggleSidebar}
                    className="text-gray-500 hover:text-[#2A5C8F] cursor-pointer !rounded-button whitespace-nowrap"
                >
                    <i className={`fas ${sidebarOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
                </button>
            </div>
            <div className="py-4">
                <ul>
                    {menuItems.map(item => (
                        <li key={item.id} className="mb-1">
                            <Link href={item.path}>
                                <div
                                    className={`flex items-center px-4 py-3 w-full text-left transition-colors ${
                                        pathname === item.path
                                            ? 'bg-[#2A5C8F]/10 text-[#2A5C8F] border-l-4 border-[#2A5C8F]'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    } cursor-pointer !rounded-button whitespace-nowrap`}
                                >
                                    <i className={`fas ${item.icon} ${!sidebarOpen ? 'text-xl mx-auto' : ''}`}></i>
                                    {sidebarOpen && <span className="ml-3">{item.label}</span>}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}