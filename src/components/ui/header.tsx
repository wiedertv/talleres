'use client'

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {useDashboard} from "@/lib/contexts/DashboardContext"

export default function Header() {
    const {activeTab} = useDashboard()

    const getTitle = () => {
        switch (activeTab) {
            case 'dashboard':
                return 'Dashboard'
            case 'clientes':
                return 'Gestión de Clientes'
            case 'vehiculos':
                return 'Gestión de Vehículos'
            case 'servicios':
                return 'Servicios'
            case 'repuestos':
                return 'Inventario de Repuestos'
            case 'fidelizacion':
                return 'Programa de Fidelización'
            case 'reportes':
                return 'Reportes y Análisis'
            case 'configuracion':
                return 'Configuración del Sistema'
            default:
                return 'Dashboard'
        }
    }

    return (
        <header className="bg-white shadow-sm z-10">
            <div className="flex items-center justify-between px-6 py-3">
                <div className="flex items-center">
                    <h1 className="text-xl font-semibold">{getTitle()}</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Buscar..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A5C8F] focus:border-transparent text-sm"
                        />
                        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                    <Button variant="ghost" className="p-2 rounded-full hover:bg-gray-100 relative">
                        <i className="fas fa-bell text-gray-600"></i>
                        <Badge
                            className="absolute top-0 right-0 h-4 w-4 bg-[#FF6B35] rounded-full text-white text-xs flex items-center justify-center">3</Badge>
                    </Button>
                    <div className="flex items-center">
                        <Avatar className="cursor-pointer">
                            <AvatarImage
                                src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20Hispanic%20workshop%20manager%20with%20a%20friendly%20smile%2C%20wearing%20a%20blue%20uniform%20shirt%2C%20studio%20lighting%2C%20professional%20photography&width=100&height=100&seq=1&orientation=squarish"/>
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="ml-2">
                            <p className="text-sm font-medium">Carlos Rodríguez</p>
                            <p className="text-xs text-gray-500">Administrador</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}