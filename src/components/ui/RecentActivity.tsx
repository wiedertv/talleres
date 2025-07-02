import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {ScrollArea} from "@/components/ui/scroll-area"

export default function RecentActivity() {
    const activities = [
        {
            icon: 'fa-car',
            color: '#2A5C8F',
            title: 'Nuevo vehículo registrado',
            desc: 'Toyota Corolla 2020',
            time: '10:25 AM'
        },
        {
            icon: 'fa-tools',
            color: '#FF6B35',
            title: 'Servicio completado',
            desc: 'Cambio de aceite y filtros',
            time: '09:42 AM'
        },
        {icon: 'fa-user', color: '#4CB944', title: 'Nuevo cliente', desc: 'María González', time: '09:15 AM'},
        {icon: 'fa-cogs', color: '#2A5C8F', title: 'Venta de repuestos', desc: 'Batería y bujías', time: '08:30 AM'},
        {icon: 'fa-tools', color: '#FF6B35', title: 'Servicio agendado', desc: 'Alineación y balanceo', time: 'Ayer'},
        {icon: 'fa-star', color: '#4CB944', title: 'Puntos redimidos', desc: 'Descuento aplicado', time: 'Ayer'},
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Actividad Reciente</CardTitle>
                <CardDescription>Últimas 24 horas</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <ScrollArea className="h-[300px]">
                    <div className="p-4 space-y-4">
                        {activities.map((activity, index) => (
                            <div key={index} className="flex items-start">
                                <div
                                    className={`h-8 w-8 rounded-full flex items-center justify-center mt-1`}
                                    style={{backgroundColor: `${activity.color}10`}}
                                >
                                    <i className={`fas ${activity.icon}`} style={{color: activity.color}}></i>
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium">{activity.title}</p>
                                    <p className="text-xs text-gray-500">{activity.desc}</p>
                                </div>
                                <span className="text-xs text-gray-400">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}