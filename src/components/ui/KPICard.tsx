import {Card, CardContent} from "@/components/ui/card"

export default function KPICards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Servicios del Mes */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Servicios del Mes</p>
                            <h3 className="text-2xl font-bold mt-1">142</h3>
                            <p className="text-xs text-[#4CB944] mt-1 flex items-center">
                                <i className="fas fa-arrow-up mr-1"></i> 12% vs. mes anterior
                            </p>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-[#2A5C8F]/10 flex items-center justify-center">
                            <i className="fas fa-tools text-[#2A5C8F] text-xl"></i>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Ventas de Repuestos */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Ventas de Repuestos</p>
                            <h3 className="text-2xl font-bold mt-1">$24,850</h3>
                            <p className="text-xs text-[#4CB944] mt-1 flex items-center">
                                <i className="fas fa-arrow-up mr-1"></i> 8% vs. mes anterior
                            </p>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                            <i className="fas fa-cogs text-[#FF6B35] text-xl"></i>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Clientes Nuevos */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Clientes Nuevos</p>
                            <h3 className="text-2xl font-bold mt-1">28</h3>
                            <p className="text-xs text-[#FF6B35] mt-1 flex items-center">
                                <i className="fas fa-arrow-down mr-1"></i> 3% vs. mes anterior
                            </p>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-[#4CB944]/10 flex items-center justify-center">
                            <i className="fas fa-users text-[#4CB944] text-xl"></i>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}